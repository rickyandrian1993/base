import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

export default function Report() {
  const nav = useNavigate()

  return (
    <div>
      <h1>Report</h1>
      <Button onClick={() => nav('/dashboard')}>To Report</Button>
    </div>
  )
}
