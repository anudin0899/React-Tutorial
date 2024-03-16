import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const bootstrapCard = (data) => {

    return (
        <>
            <Card style={{ width: '14rem', height: '16rem', padding: '5px', border: '1px solid #ced4da', overflow: 'hidden' }}>
                <Card.Img variant="top" src={data?.data?.thumbnail} style={{ height: '8rem', }} />
                <Card.Body style={{ overflow: 'hidden' }}>
                    <Card.Title style={{ height: '1.5rem', textOverflow: 'ellipsis', fontSize: "14px", flexWrap: 'nowrap', overflow: 'hidden' }}>{data?.data?.title}</Card.Title>
                    <Card.Title style={{ fontSize: "12px" }}>{data?.data?.category}</Card.Title>
                    <Card.Text>
                        {data?.data?.price}
                    </Card.Text>
                    <Link to={`/products/${data?.data?.id}`}>
                        <Button style={{ color: "white", marginTop: '5px', background: "#111", fontSize: "8px" }} variant="primary">View</Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default bootstrapCard