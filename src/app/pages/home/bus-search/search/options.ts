export const options = [
  {
    value: '6:00-24:00',
    label: '不限(6:00-24:00)',
    isLeaf: true
  },
  {
    value: 'morning',
    label: '上午(6:00-12:00)',
    children: [
      {
        value: '6:00-7:00',
        label: '6:00-7:00',
        isLeaf: true
      },
      {
        value: '7:00-8:00',
        label: '7:00-8:00',
        isLeaf: true
      },
      {
        value: '8:00-9:00',
        label: '8:00-9:00',
        isLeaf: true
      },
      {
        value: '9:00-10:00',
        label: '9:00-10:00',
        isLeaf: true
      },
      {
        value: '10:00-11:00',
        label: '10:00-11:00',
        isLeaf: true
      },
      {
        value: '11:00-12:00',
        label: '11:00-12:00',
        isLeaf: true
      }
    ]
  },
  {
    value: 'afternoon',
    label: '下午(12:00-18:00)',
    children: [
      {
        value: '12:00-13:00',
        label: '12:00-13:00',
        isLeaf: true
      },
      {
        value: '13:00-14:00',
        label: '13:00-14:00',
        isLeaf: true
      },
      {
        value: '14:00-15:00',
        label: '14:00-15:00',
        isLeaf: true
      },
      {
        value: '15:00-16:00',
        label: '15:00-16:00',
        isLeaf: true
      },
      {
        value: '16:00-17:00',
        label: '16:00-17:00',
        isLeaf: true
      },
      {
        value: '17:00-18:00',
        label: '17:00-18:00',
        isLeaf: true
      }
    ]
  },
  {
    value: 'night',
    label: '晚上(18:00-24:00)',
    children: [
      {
        value: '18:00-19:00',
        label: '18:00-19:00',
        isLeaf: true
      },
      {
        value: '19:00-20:00',
        label: '19:00-20:00',
        isLeaf: true
      },
      {
        value: '20:00-21:00',
        label: '20:00-21:00',
        isLeaf: true
      },
      {
        value: '21:00-22:00',
        label: '21:00-22:00',
        isLeaf: true
      },
      {
        value: '22:00-23:00',
        label: '22:00-23:00',
        isLeaf: true
      },
      {
        value: '23:00-24:00',
        label: '23:00-24:00',
        isLeaf: true
      },
    ]
  }
];
