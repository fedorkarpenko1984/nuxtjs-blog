const posts = [
  {title: 'Post 1', date: new Date(), views: 22, comments: [1, 2], _id: '234'},
  {title: 'Post 2', date: new Date(), views: 22, comments: [1, 2], _id: '284'}
]

export const actions = {

  async fetchAdmin({}, ) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts)
      }, 2000)
    })
  },

  async remove({}, id) {

  },
  async update({}, {id, text}) {

  },
  async fetchPostById({}, id) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts.find(p => p._id === id))
      }, 2000)
    })
  }
}
