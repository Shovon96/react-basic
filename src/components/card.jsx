export default
    function Card() {
    return (
        <div className="card bg-base-200 shadow-xl my-4">
            <figure className="p-3"><img src="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_1280.jpg" alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">Neture!</h2>
                <p>Fantasy, Butterflies, Mushrooms image. Free for use.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}