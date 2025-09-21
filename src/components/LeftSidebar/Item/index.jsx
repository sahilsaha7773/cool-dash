import classNames from 'classnames';
import styles from './styles.module.css';
import { RightArrowIcon } from '../../../assets/icons';
import { useCallback, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const Item = ({
  label,
  icon,
  isActive = false,
  isDropdown = false,
  isCollapsed = false,
  isDropdownItem = false,
  onDropdownItemClick,
  dropdownItems = [],
  theme = 'light',
  path,
}) => {
  const { tab } = useParams();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = useCallback(() => {
    if (isDropdown) {
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      navigate(path);
    }
  }, [isDropdown, isDropdownOpen, onDropdownItemClick]);

  const handleDropdownItemClick = useCallback(
    (item) => {
      navigate(`/${item.key}`);
      if (onDropdownItemClick) {
        onDropdownItemClick(!isDropdownOpen);
      }
    },
    [navigate, onDropdownItemClick, isDropdownOpen],
  );

  return (
    <div>
      <div
        className={classNames(styles.container, styles[theme], {
          [styles.collapsed]: isCollapsed,
          [styles.active]: isActive,
          [styles.dropdown]: isDropdown,
          [styles.dropdownItem]: isDropdownItem,
        })}
        onClick={handleClick}
      >
        {!isCollapsed && isDropdown ? <RightArrowIcon /> : null}
        {isActive ? <div className={styles.activeIndicator} /> : null}
        {icon}
        {!isCollapsed ? label : null}
      </div>
      {isDropdownOpen && !isCollapsed && (
        <div
          className={classNames(styles.dropdownItems, {
            [styles.slideUp]: !isDropdownOpen,
            [styles.slideDown]: isDropdownOpen,
          })}
        >
          {dropdownItems.map((item) => (
            <div
              key={item.key}
              onClick={() => handleDropdownItemClick(item)}
              className={classNames(styles.dropdownItem, styles[theme], {
                [styles.activeDropdownItem]: item.key === tab,
              })}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Item;
