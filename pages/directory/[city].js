
import {useRouter} from 'next/router'

export default function City() {
    const router = useRouter();
    const {city} = router.query;   
    
        
    return (
      <main>
      <section class="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">{city}</h1>
            {/* <h5>{city.state}</h5>
            <p className="lead text-muted">{city.service}</p> */}
           
          </div>
        </div>
      </section>
    </main>   
    )
}