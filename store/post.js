export const actions = {
  async fetchAdmin({}, ) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {title: 'Post 1', date: new Date(), views: 22, comments: [1, 2], _id: '234'},
          {title: 'Post 2', date: new Date(), views: 22, comments: [1, 2], _id: '284'}
        ])
      }, 2000)
    })
  },
  async remove({}, id) {

  }
}