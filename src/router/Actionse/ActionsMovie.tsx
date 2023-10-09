import { instance } from '../../api/axios.api'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const movieAction = async ({ request }: any) => {
  switch (request.method) {
    case 'POST': {
      const formdata = await request.formData()
      const data = {
        title: formdata.get('title'),
        image: formdata.get('image'),
        year: formdata.get('year'),
      }
      await instance.post('/movies', data)
      return null
    }
    case 'PATCH': {
      const formdata = await request.formData()
      const dataChange = {
        status: true,
        rating: formdata.get('rating'),
      }
      await instance.patch(`/movies/${formdata.get('id')}`, dataChange)
      return null
    }
    case 'DELETE': {
      const formdata = await request.formData()

      await instance.delete(`/movies/${formdata.get('id')}`)
      return null
    }
  }
}
