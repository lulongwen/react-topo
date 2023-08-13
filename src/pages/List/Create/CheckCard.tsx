import React from 'react';
import { CheckCard } from '@ant-design/pro-components';
import { Avatar, Col, Row } from 'antd';

const dataSource = [
  {
    value: 'empty',
    title: '空白表单',
    description: '信息登记，工作日报，商品订单等从零搭建',
    avatar: "//gd-assets.jinshujucdn.com/assets/dashboard/new_form/form-34de9c06bdfe9c9e9bee1e38f9fd4f25971135ef9575e1bc1370d94aad052d94.png",
  },
  {
    value: 'survey',
    title: '问卷调查',
    description: '满意度调查、产品调查、市场调查、学生调查',
    avatar: "//gd-assets.jinshujucdn.com/assets/dashboard/new_form/form-34de9c06bdfe9c9e9bee1e38f9fd4f25971135ef9575e1bc1370d94aad052d94.png",
  },
  {
    value: 'registry',
    title: '活动报名',
    description: '活动报名、资质审核、结果推送、参会提醒，全流程覆盖',
    avatar: "//gd-assets.jinshujucdn.com/assets/dashboard/new_form/registry-f5935e66153b42005cf0eba3e40172516a143895c4de4dd67d9589249c6affa0.png",
  },
  {
    value: 'vote',
    title: '投票',
    description: '在线投票、内部评选、教师评选、优秀员工评选',
    avatar: "//gd-assets.jinshujucdn.com/assets/dashboard/new_form/vote-6391423197816f4b4a2bf860963b7c72045fec8140a9ab69fed93479914d244a.png",
  },
  {
    value: 'exam',
    title: '考试测评',
    description: '多种题型，自动评分，雷达图显示结果，考完抽奖发红包',
    avatar: "//gd-assets.jinshujucdn.com/assets/dashboard/new_form/exam-77c5459dd0bd702ac34f1bffccdd36e002655d149d1c21f3164ba2799e64082a.png",
  },
  {
    value: 'reservation',
    title: '预约',
    description: '客户在线预约，商家在线接单，线下完成消费',
    avatar: "//gd-assets.jinshujucdn.com/assets/dashboard/new_form/reservation-a63720005e6f353efb4f3817d0801a6a085e2fe8696ac9df2ce611ab48d5b20c.png",
  },
  {
    value: 'loadingPage',
    title: '营销落地页',
    description: '营销获客、图片轮播、图文展示、广告落地页',
    avatar: "//gd-assets.jinshujucdn.com/assets/dashboard/new_form/customer_acquisition-23ed0f0d65632292e477b501437fe5ebcb9a5125abdb6d6b79d15e5c6a76734c.png",
  },
  {
    value: 'payment',
    title: '在线收款',
    description: '报名费收取、下单卖货、在线收款、订单系统',
    avatar: "//gd-assets.jinshujucdn.com/assets/dashboard/new_form/online_payment-aa8d59f780ab0d823539679ed11d4dbc2766f6dbbf293426089087ac222713e2.png",
  },
];

function Item(props: any) {
  const { avatar, ...rest } = props;
  return (
    <Col span={12}>
      <CheckCard
        {...rest}
        avatar={(
          <Avatar
            size={32}
            shape="square"
            src={avatar}
          />
        )}
        style={{ width: '100%' }}
      />
    </Col>
  )
}

const FormCreate: React.FC = () => {

  return (
    <CheckCard.Group
      size="small"
      bordered={false}
    >
      <Row gutter={[24, 0]}>
        {
          dataSource.map((it, i) => (
            <Item key={i} {...it}/>
          ))
        }
      </Row>
    </CheckCard.Group>
  )
}

export default FormCreate
