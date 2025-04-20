import { Skeleton, Table } from "@chakra-ui/react"

export default function SkeletonTable() {
  const placeholderRows = Array.from({ length: 10 });

  return (
    <Table.Root className="table-coins" size="sm" interactive>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Pos.</Table.ColumnHeader>
          <Table.ColumnHeader>Coin</Table.ColumnHeader>
          <Table.ColumnHeader>Symbol</Table.ColumnHeader>
          <Table.ColumnHeader>Price</Table.ColumnHeader>
          <Table.ColumnHeader>Higher 24hrs</Table.ColumnHeader>
          <Table.ColumnHeader>Lower 24hrs</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {placeholderRows.map((_, index) => (
          <Table.Row key={index}>
            <Table.Cell>
              <Skeleton height="4" width="30px" />
            </Table.Cell>
            <Table.Cell>
              <Skeleton height="4" width="120px" />
            </Table.Cell>
            <Table.Cell>
              <Skeleton height="4" width="60px" />
            </Table.Cell>
            <Table.Cell>
              <Skeleton height="4" width="90px" />
            </Table.Cell>
            <Table.Cell>
              <Skeleton height="4" width="90px" />
            </Table.Cell>
            <Table.Cell>
              <Skeleton height="4" width="90px" />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
