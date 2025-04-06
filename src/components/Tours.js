import Card from './Card';

function Tours({ tours, removeTour }) {
  return (
    <div className='container'>
      <div>
        <h2 className='title'>Available Packages</h2>
      </div>
      <div className='cards'>
        {
          tours.map((tour) => (
            <Card key={tour.id} {...tour} removeTour={removeTour} />
          ))
        }
      </div>
    </div>
  );
}

export default Tours;
