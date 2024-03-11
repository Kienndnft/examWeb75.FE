import { Row, Col, Card, Popover, Button, Typography, Pagination } from 'antd';

const { Meta } = Card;
const { Text } = Typography;

const ComMovies = ({ movies, movies_onChange, pages_onChange, page }) => {
  const size = movies ? Object.keys(movies).length : 1;
  const page_size = 4;
  const start = (page - 1) * page_size;
  const end = start + 4;

  return (
    <>
      <div style={{ padding: '10px' }}>
        <div style={{ margin: '0px 0px 10px 0px' }}>
          <Text style={{ fontSize: '1.4rem' }}>Most Popular Movies</Text>
        </div>
        <div style={{ marginBottom: '30px' }}>
          <Row gutter={8}>
            {movies &&
              movies.slice(start, end).map((item, index) => {
                return (
                  <Col
                    key={index}
                    span={6}
                  >
                    <Card
                      hoverable
                      style={{
                        width: 200,
                      }}
                      cover={
                        <img
                          style={{ height: 320 }}
                          alt={item.name}
                          src={item.image}
                        />
                      }
                    >
                      <Meta
                        title={item.name}
                        description={`${item.time} min ${item.year}`}
                      />
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 20px 0px 0px' }}>
          <Pagination
            pageSize={page_size}
            onChange={pages_onChange}
            total={size}
          />
        </div>
      </div>
    </>
  );
};

export default ComMovies;
