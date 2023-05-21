import { useState } from "react";

const Blog = () => {
  const faqs = [
    {
      question:
        "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
      answer: (
        <div className="space-y-3">
          <p className="">
            An access token is a short-lived, encrypted string that is used to
            access protected resources. It is typically issued by an
            authorization server (AS) to a client application (such as a web
            browser or mobile app) after the user has authenticated with the AS.
            Access tokens are typically used to access resources that are not
            publicly available, such as user data or internal systems.
          </p>
          <p className="">
            A refresh token is a long-lived, encrypted string that is used to
            obtain new access tokens. It is typically issued by an AS to a
            client application when the user first authenticates with the AS.
            Refresh tokens are typically used to avoid the need for the user to
            re-authenticate every time the access token expires.
          </p>
          <p className="">
            Access tokens and refresh tokens are typically stored on the
            client-side in a secure manner. This may involve storing them in a
            local storage object, a cookie, or a database. The specific method
            of storing access tokens and refresh tokens will vary depending on
            the client application and the security requirements of the system.
          </p>
          <h4 className="font-bold">
            Here is a table that summarizes the key differences between access
            tokens and refresh tokens:
          </h4>
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Job</th>
                  <th>Access Token</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>Lifetime</td>
                  <td>Short-lived</td>
                  <td>Long-lived</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Purpose</td>
                  <td>Used to access protected resources</td>
                  <td>Used to obtain new access tokens</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Storage</td>
                  <td>Typically stored on the client-side</td>
                  <td>Typically stored on the client-side</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="font-bold">
            {" "}
            Here are some best practices for storing access tokens and refresh
            tokens:
          </h4>
          <ul className="list-disc list-inside">
            <li>
              * Store access tokens and refresh tokens in a secure manner.
            </li>
            <li>
              * Encrypt access tokens and refresh tokens before storing them.
            </li>
            <li>
              * Use a secure algorithm to encrypt access tokens and refresh
              tokens.
            </li>
            <li>* Rotate access tokens and refresh tokens regularly.</li>
            <li>
              * Revoke access tokens and refresh tokens if they are compromised.
            </li>
          </ul>
          <p className="text-info">
            By following these best practices, you can help to protect your
            users&apos; data and prevent unauthorized access to your system.
          </p>
        </div>
      ),
    },
    {
      question: "Compare SQL and NoSQL databases?",
      answer: (
        <div className="space-y-3">
          <p className="">
            SQL and NoSQL databases are two different types of databases that
            store data in different ways. SQL databases are relational
            databases, which means that data is stored in tables that have rows
            and columns. NoSQL databases are non-relational databases, which
            means that data can be stored in a variety of ways, including
            documents, key-value pairs, and graphs.
          </p>

          <h4 className="font-bold">
            Here is a table that summarizes the key differences between SQL and
            NoSQL databases::
          </h4>
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>SQL</th>
                  <th>NoSQL</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>Data model</td>
                  <td>Relational</td>
                  <td>Non-relational</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Data storage</td>
                  <td>Tables</td>
                  <td>Documents, key-value pairs, graphs</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Queries</td>
                  <td>Structured</td>
                  <td>Unstructured</td>
                </tr>
                {/* row 4 */}
                <tr>
                  <td>Scalability</td>
                  <td>Vertical</td>
                  <td>Horizontal</td>
                </tr>
                {/* row 5*/}
                <tr>
                  <td>Cost</td>
                  <td>More expensive</td>
                  <td>Less expensive</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="">
            SQL databases are typically used for applications that require a lot
            of structured data, such as e-commerce websites and customer
            relationship management (CRM) systems. NoSQL databases are typically
            used for applications that require a lot of unstructured data, such
            as social media platforms and big data analytics systems.
          </p>
          <p className="">
            The main advantage of SQL databases is that they are very efficient
            for querying structured data. The main advantage of NoSQL databases
            is that they are very flexible for storing and querying unstructured
            data.
          </p>
          <p className="">
            The main disadvantage of SQL databases is that they can be difficult
            to scale horizontally. The main disadvantage of NoSQL databases is
            that they can be difficult to query for structured data.
          </p>
          <p className="">
            The choice of whether to use a SQL or NoSQL database depends on the
            specific requirements of the application. If the application
            requires a lot of structured data and efficient querying, then a SQL
            database is a good choice. If the application requires a lot of
            unstructured data and flexibility, then a NoSQL database is a good
            choice.
          </p>
          <h4 className="font-bold">
            Here are some additional details about SQL and NoSQL databases:
          </h4>
          <h3 className="text-primary font-bold">*SQL databases*</h3>
          <ul className="list-disc list-inside">
            <li>* SQL stands for Structured Query Language.</li>
            <li>* SQL databases are the most common type of database.</li>
            <li>
              * SQL databases are very efficient for querying structured data.
            </li>
            <li> * SQL databases can be difficult to scale horizontally. </li>
            <li>
              * Some popular SQL databases include MySQL, PostgreSQL, and
              Oracle.
            </li>
          </ul>
          <h3 className="text-primary font-bold">*NoSQL databases*</h3>
          <ul className="list-disc list-inside">
            <li>* NoSQL stands for Not Only SQL.</li>
            <li>
              * NoSQL databases are a newer type of database that are designed
              to store and query unstructured data.
            </li>
            <li>
              * NoSQL databases are very flexible for storing and querying
              unstructured data.
            </li>
            <li>
              {" "}
              * NoSQL databases can be difficult to query for structured data.{" "}
            </li>
            <li>
              * Some popular NoSQL databases include MongoDB, Cassandra, and
              Hadoop.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "What is express js? What is Nest JS?",
      answer: (
        <div className="space-y-3">
          <p className="">
            Express.js is a popular back-end web application framework for
            Node.js. It is a minimalist framework that provides a routing layer
            and middleware support. Express.js is easy to learn and use, and it
            is a great choice for building small to medium-sized web
            applications.
          </p>
          <p className="">
            Nest.js is a framework built on top of Express.js that provides a
            more robust and opinionated API. Nest.js uses TypeScript, which
            provides a number of benefits over JavaScript, including type safety
            and code completion. Nest.js also provides a number of features that
            are not available in Express.js, such as dependency injection,
            routing guards, and modules.
          </p>

          <h4 className="font-bold">
            Here is a table that summarizes the key differences between
            Express.js and Nest.js:
          </h4>
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Express.js </th>
                  <th> Nest.js </th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td> Framework type</td>
                  <td>Minimalist </td>
                  <td>Opinionated </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Programming language </td>
                  <td>JavaScript </td>
                  <td>TypeScript </td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Features </td>
                  <td>Routing, middleware</td>
                  <td>Dependency injection, routing guards, modules </td>
                </tr>
                {/* row 4 */}
                <tr>
                  <td>Complexity </td>
                  <td> Easy to learn and use</td>
                  <td> More complex </td>
                </tr>
                {/* row 5*/}
                <tr>
                  <td>Use cases </td>
                  <td>Small to medium-sized web applications </td>
                  <td>Large and complex web applications</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="font-bold">
            Here are some additional details about Express.js and Nest.js:
          </h4>
          <h3 className="text-primary font-bold">*Express.js*</h3>
          <ul className="list-disc list-inside">
            <li>
              * Express.js is a minimalist framework that provides a routing
              layer and middleware support.
            </li>
            <li>* Express.js is easy to learn and use. </li>
            <li>
              * Express.js is a great choice for building small to medium-sized
              web applications.
            </li>
          </ul>
          <h3 className="text-primary font-bold">*Nest.js*</h3>
          <ul className="list-disc list-inside">
            <li>
              * Nest.js is a framework built on top of Express.js that provides
              a more robust and opinionated API.{" "}
            </li>
            <li>
              *Nest.js uses TypeScript, which provides a number of benefits over
              JavaScript, including type safety and code completion.
            </li>
            <li>
              * Nest.js also provides a number of features that are not
              available in Express.js, such as dependency injection, routing
              guards, and modules.
            </li>
            <li>
              * Nest.js is more complex than Express.js, but it provides a
              number of features that make it a good choice for building large
              and complex web applications.
            </li>
          </ul>
          <p className="text-info">
            Ultimately, the best choice for you will depend on your specific
            needs and requirements. If you are looking for a simple and
            easy-to-use framework, then Express.js is a good choice. If you are
            looking for a more robust and opinionated framework, then Nest.js is
            a good choice.
          </p>
        </div>
      ),
    },
    {
      question: "What is MongoDB aggregate and how does it work?",
      answer: (
        <div className="space-y-3">
          <p className="">
            MongoDB aggregate is a feature that allows you to perform complex
            operations on data in your MongoDB database. Aggregate operations
            are performed using aggregation pipelines, which are sequences of
            stages that process documents. Each stage performs an operation on
            the input documents, and the documents that are output from a stage
            are passed to the next stage. The final stage in the pipeline
            returns the results of the aggregation operation.
          </p>

          <h4 className="font-bold">
            There are a variety of aggregation stages available, each of which
            performs a different operation on the documents. Some of the most
            common aggregation stages include:
          </h4>

          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Express.js </th>
                  <th> Nest.js </th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td> Framework type</td>
                  <td>Minimalist </td>
                  <td>Opinionated </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Programming language </td>
                  <td>JavaScript </td>
                  <td>TypeScript </td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Features </td>
                  <td>Routing, middleware</td>
                  <td>Dependency injection, routing guards, modules </td>
                </tr>
                {/* row 4 */}
                <tr>
                  <td>Complexity </td>
                  <td> Easy to learn and use</td>
                  <td> More complex </td>
                </tr>
                {/* row 5*/}
                <tr>
                  <td>Use cases </td>
                  <td>Small to medium-sized web applications </td>
                  <td>Large and complex web applications</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="list-disc list-inside">
            <li>
              * $match: This stage filters documents based on a condition.
            </li>
            <li>
              * $group: This stage groups documents together based on a common
              value.{" "}
            </li>
            <li>* $project: This stage projects new fields onto documents.</li>
            <li>
              * $sum: This stage calculates the sum of a field across all
              documents in a group.
            </li>

            <li>
              * $avg: This stage calculates the average of a field across all
              documents in a group.
            </li>

            <li>
              * $min: This stage calculates the minimum value of a field across
              all documents in a group.
            </li>

            <li>
              * $max: This stage calculates the maximum value of a field across
              all documents in a group.
            </li>

            <li>
              * $sort: This stage sorts documents by a field.* $limit: This
              stage limits the number of documents returned.
            </li>
          </ul>

          <p className="text-info">
            To perform an aggregation operation, you use the
            db.collection.aggregate() method. The method takes an array of
            aggregation stages as its argument. The method returns an array of
            documents that are the results of the aggregation operation.
          </p>

          <h4 className="font-bold">
            Here is an example of an aggregation operation that calculates the
            total number of documents in a collection:
          </h4>
          <div className="bg-slate-800 p-4 rounded-lg">
            {" "}
            <code className=" text-white">
              {/* */}
              db.collection.aggregate([ &lbrace; &quot;$match&quot;: &lbrace;
              &quot;name&quot;: &quot;MongoDB&quot; &rbrace; &rbrace;, &lbrace;
              &quot;$group&quot;: &lbrace; &quot;_id&quot;: null,
              &quot;totalCount&quot;: &lbrace; &quot;$sum&quot;: 1 &rbrace;
              &rbrace;&rbrace;])
            </code>
          </div>
          <p className="">
            This aggregation operation will first filter the documents in the
            collection to only include documents where the name field is equal
            to &quot;MongoDB&quot;. The aggregation operation will then group
            the documents together based on the _id field. The final stage in
            the aggregation operation calculates the sum of the _id field across
            all documents in the group. The results of the aggregation operation
            will be an array of documents that contains a single document with
            the total count of documents in the collection.
          </p>
          <p className="">
            MongoDB aggregate is a powerful tool that allows you to perform
            complex operations on data in your MongoDB database. By using
            aggregation pipelines, you can easily filter, group, and calculate
            data in your database.
          </p>
        </div>
      ),
    },
    // Add more FAQs here
  ];

  const [isOpen, setIsOpen] = useState([]);

  const toggleAccordion = (index) => {
    setIsOpen((prevOpen) => {
      const openArray = [...prevOpen];
      openArray[index] = !openArray[index];
      return openArray;
    });
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10 mb-8">
          Frequently Asked Questions
        </h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left rounded-lg bg-white hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-50"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-gray-900">{faq.question}</span>
                <svg
                  className={`${
                    isOpen[index] ? "transform rotate-180" : ""
                  } w-5 h-5 text-gray-500`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 8a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 4a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className={`${
                  isOpen[index] ? "block" : "hidden"
                } px-4 pt-2 pb-4 text-gray-700`}
              >
                <div>{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
