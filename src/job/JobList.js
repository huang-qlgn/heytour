import React from "react";
import { Card, Image } from "semantic-ui-react";
import data from "../data/data.json";

function JobList() {
  const status = "";
  const getData = data.map((data) => {
    switch (data.isActive) {
      case "true":
        status = "Active";
        break;
      case "false":
        status = "Not Active";
    }

    return (
      <Card key={data.id} fluid>
        <Card.Content>
          <Card.Header>
            {data.title} - {data.company} ({status})
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Image src={data.picture} size="mini" />
          <Card.Meta>{data.location}</Card.Meta>
          <Card.Meta>{data.industry}</Card.Meta>
          <Card.Meta>{data.email}</Card.Meta>
          <Card.Meta>{data.postedOn}</Card.Meta>
          <Card.Description>{data.jobDesc}</Card.Description>
        </Card.Content>
      </Card>
    );
  });
  return <Card.Group>{getData}</Card.Group>;
}

export default JobList;
