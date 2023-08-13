import React from "react";
import { Avatar, List, Space, Card, Image } from "antd";
// import {
//   EllipsisOutlined,
//   FundViewOutlined,
//   FileSearchOutlined
// } from "@ant-design/icons";
import { Link } from "@umijs/max";

const { Item } = List;

const IconText = ({ label, value }: { label: string, value: number }) => (
  <Space direction="vertical" size={2}>
    <b>{value}</b>
    {label}
  </Space>
);

type ItemProps = {
  dataSource: any[],
}

const FormItem: React.FC<ItemProps> = ({ dataSource }) => {

  return (
    <List
      itemLayout="vertical"
      dataSource={dataSource}
      renderItem={(item: any) => (
        <Item
          key={item.title}
          actions={[
            <Link to={`/preview/${item.id}`} key="edit">
              <IconText label="浏览数" value={800} />
            </Link>,
            <IconText label="提交数" value={709} key="data" />,
            <IconText label="今日新增" value={23} key="settings" />
          ]}
        >
          <Item.Meta
            // avatar={ <Avatar src={item.avatar}>{item.title.slice(0,1)}</Avatar> }
            title={(
              <Link
                to={item.url}
                style={{ color: "#1890ff" }}
              >
                {item.title}
              </Link>
            )}
            description={item.description}
          />
          <Image
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Item>
      )}
    />
  );
};


interface IProps {
  item: {};
}

const FormList: React.FC<IProps> = (props) => {
  const { item } = props;

  return (
    <Card
      bordered={false}
      size={"small"}
    >
      <FormItem
        dataSource={[item]}
      />
    </Card>
  );
};

export default FormList;
