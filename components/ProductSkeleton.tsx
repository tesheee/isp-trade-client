import React from 'react';
import ContentLoader from "react-content-loader";

function ProductSkeleton(){
    return(
        <ContentLoader
            style={{border: '1px solid gray', opacity: '0.2', borderRadius: '8px'}}
            speed={3}
            width={450}
            height={550}
            viewBox="0 0 450 550"
            backgroundColor="#f3f3f3"
            foregroundColor="#e6e6e6" >
            <rect x="50" y="50" rx="10" ry="10" width="350" height="350" />
            <rect x="80" y="415" rx="5" ry="5" width="295" height="21" />
            <rect x="80" y="445" rx="7" ry="7" width="295" height="33" />
            <rect x="120" y="485" rx="4" ry="4" width="200" height="15" />
        </ContentLoader>
    );
}

export default ProductSkeleton;