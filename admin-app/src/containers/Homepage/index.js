import React from "react";
import { Jumbotron } from "react-bootstrap";
import Layout from "../../components/layouts";

export default function Home() {
  return (
    <div>
     <Layout>
         <Jumbotron  style={{margin: '5rem' , background: '#fff'}}className="text-center">
             <h1> Welcome to Admin Dashboard</h1>
             <p> Lorem ipsum lorem ipsum Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum Lorem ipsum lorem ipsum
             Lorem ipsum lorem ipsumLorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
             Lorem ipsum lorem ipsum
             </p>
         </Jumbotron>
     </Layout>
    </div>
  );
}
