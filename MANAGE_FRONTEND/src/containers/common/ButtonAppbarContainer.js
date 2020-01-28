import React from 'react'
import { useSelector } from 'react-redux'
import ButtonAppBar from '../../components/common/ButtonAppbar'

const ButtonAppbarContainer = () => {
	const { user } = useSelector(({ user }) => ({
		user: user.user
	}))
	return <ButtonAppBar user={user} />
}

export default ButtonAppbarContainer