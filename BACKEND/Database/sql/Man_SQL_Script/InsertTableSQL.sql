-- create database yb_travel;
use yb_travel;

-- click table
CREATE TABLE IF NOT EXISTS `clicktb` (
	idx int auto_increment  primary key,
    nation int not null,
    click_cnt int not null,
    qr_cnt int not null,
    date datetime not null,
	foreign key (nation) references nationtb(idx)
);
# drop table clicktb;
desc clicktb;

select 1 from clicktb where nation=1;

insert into clicktb(nation, click_cnt, qr_cnt, date) values(1, 1, 1, '2020-02-03');
select * from clicktb;

update clicktb 
set click_cnt=click_cnt+1
where nation=1;

select * from clicktb;

update clicktb 
	set click_cnt=click_cnt+1
	where nation=1 AND date='2020-02-05';


select idx, nation, click_cnt, qr_cnt, date 
from clicktb
where nation=1 and date='2020-02-05';

delete from clicktb where date='2020-02-05';

update clicktb
set qr_cnt=qr_cnt+1
where nation=1;

update clicktb
set qr_cnt=qr_cnt+1
where nation=1 AND date='2020-02-05';