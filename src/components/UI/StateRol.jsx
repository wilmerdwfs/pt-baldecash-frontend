import styles from './StateRol.module.css';

const StateRol = ({ state}) => {
  let typeLabel
  let label

  switch (state) {
    case 0:
      typeLabel = styles.reviewer;
      label = 'Revisior';
      break;
    case 1:
      typeLabel = styles.admin;
      label = 'Administrador';
      break;
  }

  return (
    <div className={`${typeLabel}`}>
      {label}
    </div>
  )
};

export default StateRol;