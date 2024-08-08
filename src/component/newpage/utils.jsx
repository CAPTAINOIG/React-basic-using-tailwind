import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
} from "@nextui-org/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


import { PlusIcon } from "../Table/PlusIcon";
import { VerticalDotsIcon } from "../Table/VerticalDotsIcon";
// import { SearchIcon } from "../Table/SearchIcon";
import { ChevronDownIcon } from "../Table/ChevronDownIcon";
import { columns, users, statusOptions } from "../Table/Data";
import { capitalize } from "../Table/utils";
import Footer from "../Footer";


const statusColorMap = {
  active: "success",
  blocked: "danger",
  vacation: "warning",
};

const storageLevelMap = {
  low: { width: "25%", color: "bg-blue-500" },
  medium: { width: "50%", color: "bg-yellow-500" },
  high: { width: "75%", color: "bg-green-500" },
  full: { width: "100%", color: "bg-red-500" },
};

const INITIAL_VISIBLE_COLUMNS = ["name", "email", "role", "storage", "status", "actions"];

const HistoryTable = () => {
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [isOpen, setIsOpen] = useState(false)
  console.log(rowsPerPage);



  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "age",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;
    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...users];
    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status)
      );
    }
    return filteredUsers;
  }, [users, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;
      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "full", src: user.avatar }}
            // description={user.email}
            name={cellValue}
          />
        );
      case "email":
        return <p>{cellValue}</p>;
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
          </div>
        );
      case "storage":
        const storageLevel = storageLevelMap[user.storage] || storageLevelMap.low;
        return (
          <div className="w-full h-2 bg-gray-200 rounded-lg overflow-hidden">
            <div className={`${storageLevel.color} h-full`} style={{ width: storageLevel.width }} />
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-300" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>View Detail</DropdownItem>
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4 px-10">
        <div className=" gap-3 items-end">
          <p className="text-3xl">Users</p>
          
          <div className="flex gap-3 items-end justify-end">
          <div className="relative inline-block z-50 p-5">
              <div className="flex items-center">
                <button onClick={handleToggle} className="flex items-center ml-2">
                  {isOpen ? <IoIosArrowUp className="ml-2" /> : <IoIosArrowDown className="ml-2" />}
                </button>
              </div>
              {isOpen && (
                <div className="absolute mt-2 lg:ms-[-250px] w-72 p-5 shadow-lg bg-white">
                  <label htmlFor="">Role</label>
                  <select className="block w-full my-3 px-4 py-2 text-sm leading-5 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option value="admin">Select</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                    <option value="guest">Guest</option>
                  </select>

                  <label htmlFor="">Status</label>
                  <select className="block w-full px-4 my-3 py-2 text-sm leading-5 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option value="admin">Select</option>
                    <option value="admin">Active</option>
                    <option value="user">Admin</option>
                    <option value="guest">Guest</option>
                  </select>
                  <button className="bg-blue-800 rounded font-bold p-2 my-2 text-white">Filter</button>
                </div>
              )}
            </div>
            <Dropdown>
              <DropdownTrigger className="hidden border border-blue-600 sm:flex">
                <Button color="white" endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                </Button>
              </DropdownTrigger> 
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            {/* <Dropdown>
              <DropdownTrigger className="hidden border border-blue-600 sm:flex">
                <Button color="white" endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                </Button> */}
              {/* </DropdownTrigger> */}
              {/* <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu> */}
            {/* </Dropdown> */}

            
          </div>
        </div>
        <div className="flex items-center justify-between mb-[-40px]">
          <label className="flex items-center text-small text-dark">
            Show:
            <select
              className="border border-gray-200 bg-white ml-2 rounded-lg px-3 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <span className="ms-2">entries</span>
          </label>
          <div className="flex">
            <span className="mt-2">Search:</span>
            <Input
              isClearable
              style={{
                height: '1.75rem', border: '1px solid #D1D5DB', borderRadius: '0.375rem', outline: 'none',

              }}
              classNames={{
                inputWrapper: [
                  "hover:!bg-transparent",
                  "!bg-transparent",
                ],
              }}
              className="focus:outline-none hover:bg-transparent"
              value={filterValue}
              onClear={() => onClear()}
              onValueChange={onSearchChange}
            />
          </div>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onRowsPerPageChange,
    users.length,
    onSearchChange,
    hasSearchFilter,
    handleToggle, isOpen,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <>
        <div className=" flex justify-between items-center">
          <span className="w-[30%] text-small text-default-400">
            {rowsPerPage > 1 && rowsPerPage <= 12 && (
              <div className="text-sm  text-black mt-2">
                Showing 1 - {rowsPerPage} of 12 entries
              </div>
            )}
          </span>
          <div className="flex items-center">
            <div className="flex">
              <div className="border border-gray-600 h-8 inline-flex space-x-[-20px]">
                <Button color="white" className="rounded-none text-black font-semibold p-2" isDisabled={page === 1} size="sm" variant="flat" onPress={onPreviousPage}>
                  <div className="flex items-center">
                    <span className=" text-[20px]">Previous</span>
                    <span className="bg-blue-700 border h-26 p-10 text-white px-2">1</span>
                  </div>
                </Button>

                <Button color="white" className="rounded-none text-black font-semibold p-2" isDisabled={page === pages} size="sm" onPress={onNextPage}>
                  <div className="flex items-center">
                    <span className="bg-blue-700 px-2 h-26 p-10 text-white ">2</span>
                    <span className="text-[20px]">Next</span>
                  </div>
                </Button>
              </div>

            </div>

          </div>
        </div>
        <Footer />
      </>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  return (
    <Table className="custom-table-wrapper px-20 gap-10 overflow-x-auto w-[100%]"
      // aria-label="Example table with custom cells, pagination and sorting"
      // isHeaderSticky
      bottomContent={bottomContent}
      // bottomContentPlacement="outside"
      classNames={{
        wrapper: "custom-table-wrapper",
        header: "custom-table-header",
        cell: "custom-table-cell",
        height: 'auto',
        minWidth: '100%',
      }}
      selectedKeys={selectedKeys}
      selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn className="bg-white"
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No users found"} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>

  );
};

export default HistoryTable;
