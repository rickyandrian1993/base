import { Card, Select, Typography } from 'antd'
import { useState } from 'react'
import styled from 'styled-components'

const Login = () => {
  const groupedOptions = [
    {
      label: 'Fruits',
      options: ['Apple', 'Banana', 'Orange']
    },
    {
      label: 'Vegetables',
      options: ['Carrot', 'Broccoli', 'Spinach']
    }
  ]

  const [options, setOptions] = useState({
    mst_vehicle: [
      { label: 'KB1234AC', value: 'KB1234AC' },
      { label: 'KB1111AC', value: 'KB1111AC' }
    ],
    second_w: [
      { label: 'KB2222AA', value: 'KB2222AA' },
      { label: 'KB3333AB', value: 'KB3333AB' }
    ]
  })
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }

  const onSearch = (value) => {
    console.log('search:', value)
  }

  return (
    <StyledCard>
      <Typography.Title>Login</Typography.Title>
      <Select
        placeholder="Please select vehicle number"
        showSearch
        onSearch={onSearch}
        optionFilterProp="label"
        style={{ width: '100%' }}
        onChange={handleChange}
        options={[
          {
            label: <span>Timbangan Kedua</span>,
            title: 'second_w',
            options: options.second_w
          },
          {
            label: <span>Master Kendaraan</span>,
            title: 'mst_vehicle',
            options: options.mst_vehicle
          }
        ]}
        filterOption={(input, option) => {
          console.log(input, option)
          // try {
          //   const filterMstVechicle = options.mst_vehicle.filter(
          //     (e) => input.toLowerCase() === e.label.toLowerCase()
          //   )
          //   const filterSecondW = options.second_w.filter(
          //     (e) => input.toLowerCase() === e.label.toLowerCase()
          //   )

          //   setOptions({ mst_vehicle: filterMstVechicle, second_w: filterSecondW })
          // } catch (error) {
          //   console.log('error', error)
          //   return false
          // }
          // return what?
          return true
        }}
      />
    </StyledCard>
  )
}

const StyledCard = styled(Card)``

export default Login
