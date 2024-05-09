import { getDefaultNormalizer } from "@testing-library/react";
import lightlogo from "./Images/light-logo.png";

function EndInfo() {
    // Define data for categories
    const categories = [
        { title: "Men", items: ["T-shirts", "Sweatshirts", "Shirts", "Jeans", "Trousers", "Shoes", "Casuals", "Formals", "Sports", "Watch"] },
        { title: "Women", items: ["T-shirts", "Sweatshirts", "Shirts", "Jeans", "Trousers", "Shoes", "Casuals", "Formals", "Sports", "Watch"] }
    ];

    return (
        <footer>
            <div className="footer-content">
                <img src={lightlogo} className="logo" alt="Company Logo" />
                <div className="footer-ul-container">
                    {categories.map((category, index) => (
                        <ul key={index} className="category">
                            <li className="category-title">{category.title}</li>
                            {category.items.map((item, i) => (
                                <li key={i}><a href="#" className="footer-link">{item}</a></li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
            <p class="footer-title">about company</p>
            <p class="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat tempore ad suscipit, eos eius quisquam sed optio nisi quaerat fugiat ratione et vero maxime praesentium, architecto minima reiciendis iste quo deserunt assumenda alias ducimus. Ullam odit maxime id voluptates rerum tenetur corporis laboriosam! Cum error ipsum laborum tempore in rerum necessitatibus nostrum nobis modi! Debitis adipisci illum nemo aperiam sed, et accusamus ut officiis. Laborum illo exercitationem quo culpa reprehenderit excepturi distinctio tempore cupiditate praesentium nisi ut iusto, assumenda perferendis facilis voluptas autem fuga sunt ab debitis voluptatum harum eum. Asperiores, natus! Est deserunt incidunt quasi placeat omnis, itaque harum?</p>
            <p class="info">support emails - help@clothing.com, customersupport@clothing.com</p>
            <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
            <div class="footer-social-container">
                <div>
                    <a href="#" class="social-link">terms & services</a>
                    <a href="#" class="social-link">privacy page</a>
                </div>
                <div>
                    <a href="#" class="social-link">instagram</a>
                    <a href="#" class="social-link">facebook</a>
                    <a href="#" class="social-link">twitter</a>
                </div>
            </div>
            <p class="footer-credit">Clothing, Best apparels online store</p>
        </footer>
    );
}

export default EndInfo;