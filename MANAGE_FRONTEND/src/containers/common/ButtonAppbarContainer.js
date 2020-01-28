import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ButtonAppBar from '../../components/common/ButtonAppbar'
import { logout } from '../../modules/user'
import { authLogout } from '../../modules/auth'

const ButtonAppbarContainer = () => {
	const { user } = useSelector(({ user }) => ({
		user: user.user
	}))

	const dispatch = useDispatch()
	const onLogout = () => {
		dispatch(logout())
		dispatch(authLogout())
	}

	return <ButtonAppBar user={user} onLogout={onLogout} />
}

export default ButtonAppbarContainer