package com.yb.rest.controller;

import java.io.File;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.yb.rest.key.GetKEY;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;


public class SpeechController {

	private static final String BUCKET_NAME = "nearbyad";
	private static final String ACCESS_KEY = GetKEY.getAccesskey();
	private static final String SECRET_KEY = GetKEY.getSecretkey();

	private static AmazonS3 amazonS3; // 인스턴스를 초기화한다.
	private static SpeechController aws = new SpeechController();
	public SpeechController() {
		// 인증 객체를 생성한다.
		AWSCredentials awsCredentials = new BasicAWSCredentials(ACCESS_KEY, SECRET_KEY);
		// https://s3.console.aws.amazon.com/s3/buckets/static.preeplus.com/?region=ap-northeast-2&tab=overview
		amazonS3 = AmazonS3ClientBuilder.standard().withRegion(Regions.AP_NORTHEAST_2)
				.withCredentials(new AWSStaticCredentialsProvider(awsCredentials)).build();
	}

	public static void tts(String sentence, String idx) {
		String clientId = "vqipsxwgmf";// 애플리케이션 클라이언트 아이디값";
		String clientSecret = "rxj0tJnnv9tgRrbr82IjUGDssiMOykunS5SNW8j9";// 애플리케이션 클라이언트 시크릿값";
		try {
			String text = URLEncoder.encode(sentence, "UTF-8"); // 13자
			String apiURL = "https://naveropenapi.apigw.ntruss.com/voice/v1/tts";
			URL url = new URL(apiURL);
			HttpURLConnection con = (HttpURLConnection) url.openConnection();
			con.setRequestMethod("POST");
			con.setRequestProperty("X-NCP-APIGW-API-KEY-ID", clientId);
			con.setRequestProperty("X-NCP-APIGW-API-KEY", clientSecret);
			// post request
			String postParams = "speaker=mijin&speed=0&text=" + text;
			con.setDoOutput(true);
			DataOutputStream wr = new DataOutputStream(con.getOutputStream());
			wr.writeBytes(postParams);
			wr.flush();
			wr.close();
			int responseCode = con.getResponseCode();
			BufferedReader br;
			if (responseCode == 200) { // 정상 호출
				InputStream is = con.getInputStream();
				int read = 0;
				byte[] bytes = new byte[1024];

				// 랜덤한 이름으로 mp3 파일 생성
				// String tempname = Long.valueOf(new Date().getTime()).toString();
				String filepath = "/home/ubuntu/NEARBYAD/backend/speech/" + idx + ".mp3";
				File f = new File(filepath);
				f.createNewFile();
				OutputStream outputStream = new FileOutputStream(f);
				while ((read = is.read(bytes)) != -1) {
					outputStream.write(bytes, 0, read);
				}
				// s3에 업로드하기
				
				System.out.println(f.getName());
				s3FileUpload(f, idx);
				is.close();
			} else { // 오류 발생
				br = new BufferedReader(new InputStreamReader(con.getErrorStream()));
				String inputLine;
				StringBuffer response = new StringBuffer();
				while ((inputLine = br.readLine()) != null) {
					response.append(inputLine);
				}
				br.close();
				System.out.println(response.toString());
			}
		} catch (Exception e) {
			System.out.println(e);
		}
	}

	public static void s3FileUpload(File file, String idx) {
		if (amazonS3 != null) {
			try {
				PutObjectRequest putObjectRequest = new PutObjectRequest(BUCKET_NAME + "/speech", idx+".mp3", file);
				putObjectRequest.setCannedAcl(CannedAccessControlList.PublicRead);
				amazonS3.putObject(putObjectRequest);
			} catch (AmazonServiceException ase) {
				ase.printStackTrace();
			} finally {
				amazonS3 = null;
			}
		}
	}
}