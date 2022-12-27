import React, { useState } from 'react';
import styles from './UserList.module.css';
import Card from '../Card/Card'

const UserList = props => {
  if (!props.items) {
    return
  }
  

  return (
    <Card className={styles['user-list']}>
      <ul>
        {props.items.map(user => (
          <li
            key={user.id}
            id={user.id}
          >
            <label>({user.name}) {user.age}</label>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;