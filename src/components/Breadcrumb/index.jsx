import { Breadcrumb as BreadcrumbAntd } from 'antd';

const Breadcrumb = ({ items, ...props }) => {
  return <BreadcrumbAntd items={items} {...props} />;
};

export default Breadcrumb;
