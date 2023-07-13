import { render, screen } from '@testing-library/react'
import VideoItem from '../components/VideoItem'

const data = {
  id: '929de917-2833-4d47-b0ab-b1e29b8acfc8',
  title: 'Bài học cho Việt Nam khi Ấn Độ từ chối NATO!',
  vid: '6uN1wVT2mKQ',
  likeCount: 1075,
  dislikeCount: 0,
  description: 'Giải mã lý do Ấn Độ quyết chết không vào NATO?',
  sharedBy: {
    email: 'test@example.com',
  },
}

describe('Video Item Component', () => {
  test('should render an iframe tag with correct attributes', () => {
    render(<VideoItem data={data} />)

    const iframe = screen.getByTitle('YouTube video player')
    expect(iframe).toHaveAttribute('src', 'https://www.youtube.com/embed/6uN1wVT2mKQ')
    expect(iframe).toHaveAttribute(
      'allow',
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
    )
  })

  test('should render correct video information', () => {
    render(<VideoItem data={data} />)

    expect(screen.getByText('Bài học cho Việt Nam khi Ấn Độ từ chối NATO!')).toBeInTheDocument()
    expect(screen.getByText('Shared by:')).toBeInTheDocument()
    expect(screen.getByText('test@example.com')).toBeInTheDocument()
    expect(screen.getByText('1075')).toBeInTheDocument()
    expect(screen.getByText('0')).toBeInTheDocument()
    expect(screen.getByText('Giải mã lý do Ấn Độ quyết chết không vào NATO?')).toBeInTheDocument()
  })
})
