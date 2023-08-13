/**
 * User: lulongwen
 * Date: 2021-10-24 15:22
 * Description: 默认的图表样式
 */

export function getMarkArea(length, itemEvents) {
  const startP = length > 1 ? 24 : 16;
  const diff = 16;

  const markAreas = (itemEvents || []).map((event, index) => {
    const { name, type, startTime, endTime, message } = event;
    return [
      {
        name: `${name}:${type}`,
        xAxis: startTime,
        y: startP + diff * index,
        itemStyle: {
          borderWidth: 2,
          borderColor: type === 'Normal' ? '#5dc859' : '#FF0087',
          color: type === 'Normal' ? '#5dc859' : '#FF0087',
        },
      },
      {
        name: message,
        xAxis: endTime,
        y: startP + diff * (index + 1),
      },
    ];
  });

  return {
    silent: false,
    data: markAreas,
    label: {
      show: false,
      width: 60,
    },
    emphasis: {
      label: {
        position: 'bottom',
        show: true,
      },
    },
  };
}
