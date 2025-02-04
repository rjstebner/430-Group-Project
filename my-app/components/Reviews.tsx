const Reviews = () => {
    return (
      <section className="p-6 mt-10">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <div className="border p-4 rounded">
          <p>No reviews yet. Be the first to review this product!</p>
        </div>
        <form className="mt-6">
          <h3 className="text-lg font-semibold">Leave a Review</h3>
          <label htmlFor="review-text" className="block mt-2">Your Review</label>
          <textarea id="review-text" className="w-full p-2 border rounded mt-1" required></textarea>
  
          <label htmlFor="review-rating" className="block mt-4">Rating</label>
          <select id="review-rating" className="w-full p-2 border rounded mt-1">
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Very Good</option>
            <option value="3">3 - Average</option>
            <option value="2">2 - Poor</option>
            <option value="1">1 - Terrible</option>
          </select>
  
          <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded mt-4 hover:bg-orange-600 transition">
            Submit Review
          </button>
        </form>
      </section>
    );
  };
  
  export default Reviews;
  