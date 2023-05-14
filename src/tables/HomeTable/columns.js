export const HomesTableComlumns = [
  {
    Header: "Id",
    accessor: "id"
  },
  {
    Header: "Owner",
    accessor: "owner_name"
  },
  {
    Header: "Name",
    accessor: 'property.name'
  },
  {
    Header: "Description",
    accessor: 'property.description'
  },
  {
    Header: "Status",
    accessor: "property.availability_status"
  },
  {
    Header: "Agent",
    accessor: "property.agent_id"
  },
  {
    Header: "Manager",
    accessor: "property.property_manager_id"
  },
]