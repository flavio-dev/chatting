import React from 'react'

import styles from './Sidebar.css'
import Heart from 'components/Heart'

export const Sidebar = ({listOfUsers, selectUser, userSelected}) => {
  return <div className={styles.Sidebar}>
    <div className={styles.SidebarUser} onClick={() => selectUser('ALL')}>
      <span>All</span>
    </div>
    {listOfUsers.map((user, index) => {
      const isSelected = userSelected === user
        ? 'SidebarUserSelected'
        : 'SidebarUser'
      return (
        <div className={styles[isSelected]} key={user} onClick={() => selectUser(user)}>
          <span>{user}</span>
          {userSelected === user &&
            <span><Heart arrow /></span>
          }
        </div>
      )
    })}
  </div>
}

export default Sidebar


// <div className={styles.SidebarUserSelected} onClick={() => selectUser('Dump')}>
//   <span>Dummy User</span><span><Heart arrow /></span>
// </div>
