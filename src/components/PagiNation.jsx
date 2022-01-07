import React from 'react'
import {   Pagination } from 'react-bootstrap'

export default function PagiNation() {
// 	let active = 2;
// let items = [];
// for (let number = 1; number <= 5; number++) {
//   items.push(
//     <Pagination.Item key={number}   active={number === active}>
//       {number}
//     </Pagination.Item>,
//   );
// }
    return (
     <div className="mt-3" style={{ display: "flex", justifyContent: "center" }}>
<div style={{ display: "flex", justifyContent: "center" }}>
  <Pagination>
    <Pagination.First />
    <Pagination.Prev />
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Ellipsis />

    <Pagination.Item>{10}</Pagination.Item>
    <Pagination.Item>{11}</Pagination.Item>
    <Pagination.Item active>{12}</Pagination.Item>
    <Pagination.Item>{13}</Pagination.Item>
    <Pagination.Item disabled>{14}</Pagination.Item>

    <Pagination.Ellipsis />
    <Pagination.Item>{20}</Pagination.Item>
    <Pagination.Next />
    <Pagination.Last />
  </Pagination>
</div>
     </div>
	

    )
}
