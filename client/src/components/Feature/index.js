import React from 'react';

const Feature = () => {

    return (
        <div className="FeatureBox" style={{ border: '1px dotted #1a1a1a' }}>
            <div className="card" style={{ width: '18rem' }}>
                <img src="..." class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Boston Market</h5>
                    <p className="card-text">cuisine: American</p>
                    <p className="card-text">Rating: 7/10</p>
                    <a href="#" className="btn btn-primary">See Reviews</a>
                </div>
            </div>
        
            {/* <p>name: String!
                cuisine: String
                image: String
               
                totalRating: Int
            </p> */}
        </div>
    )
};
export default Feature;
 {/* reviews: [Review] */}