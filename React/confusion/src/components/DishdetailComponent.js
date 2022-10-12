import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

function RenderDish({ dish }) {
    console.log(dish)
    if (dish != null)
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else return <div></div>;
}

function RenderComments({ comments }) {
    if (comments != null) {
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map(({ id, rating, comment, author, date }) => (
                        <li key={id}>
                            <p>{comment}</p>
                            <p>{`-- ${author}, ${new Intl.DateTimeFormat(
                                "en-US",
                                {
                                    year: "numeric",
                                    month: "short",
                                    day: "2-digit",
                                }
                            ).format(new Date(Date.parse(date)))}`}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    } else return <div></div>;
}

const DishDetail = (props) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props?.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props?.dish?.comments} />
                </div>
            </div>
        </div>
    );
};

export default DishDetail;
