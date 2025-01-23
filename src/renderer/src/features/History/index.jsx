import { WBForm, WBInput } from '@renderer/components'
import { Flex, Table } from 'antd'
import styled from 'styled-components'

const dataSource = Array.from({
  length: 50
}).map((_, i) => ({
  key: i,
  name: `Edward ${i}`,
  age: 32,
  address: `London Park no. ${i}`
}))

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Action',
    key: 'action',
    render: () => <a>Delete</a>
  }
]

export default function History() {
  return (
    <PageSpace>
      <StyledSection>
        <Flex wrap>
          <WBInput.Date name="date_filter" label="Tanggal" />
          <WBInput.Text name="tracking_no" label="Nomor Ticket" />
        </Flex>
        <Table
          style={{ width: '100%' }}
          dataSource={dataSource}
          columns={columns}
          pagination={{
            defaultPageSize: 10,
            showTotal: (total, range) => `Showing ${range[0]}-${range[1]} of ${total}`,
            size: 'small'
            // simple: { readOnly: true }
          }}
        />
      </StyledSection>
    </PageSpace>
  )
}

const PageSpace = styled(WBForm)`
  display: flex;
  width: calc(100vw - 32px);
  flex-wrap: wrap;
  gap: 8px;
  .ant-input-number-affix-wrapper {
    width: 100%;
  }
`

const StyledSection = styled.div`
  display: flex;
  overflow-y: auto;
  flex-flow: column nowrap;
  align-items: start;
  width: 100%;
  max-height: calc(100vh - 66px);
  overflow-y: scroll;
  flex: 1 1 100%;
  max-width: 'calc(100% - 4px)';

  & > * {
    background-color: var(--card-background-color);
    border: 1px solid var(--primary-color-50);
    padding-inline: 8px;
    margin-block: 4px;
    border-radius: 4px;
  }

  .ant-flex {
    gap: 0px 8px;
    width: 100%;
  }

  .ant-form-item {
    display: flex;
    margin-block: 14px 8px;
    /* flex: 1 1 calc(50% - 16px); */
    .ant-row .ant-form-item-label {
      background-color: var(--card-background-color);
    }
    &:nth-child(odd) {
      &:last-child:not(:nth-child(odd)) {
        flex: 1 1 calc(100% - 16px);
      }
    }
    .ant-row {
      width: 100%;
    }
  }
`
