// import monitorData from '../src/pages/monitor/mock/monitor.json'

export default {
  'GET /api/v1/queryList': (req: any, res: any) => {
    console.log('GET /api/v1/queryList', Object.keys([]))
    res.json({
      success: true,
      errorCode: 0,
      code: 0,
      // ...monitorData.data,
    });
  },

  // 'PUT /api/v1/user/': (req: any, res: any) => {
  //   res.json({
  //     success: true,
  //     errorCode: 0,
  //   });
  // },
};
