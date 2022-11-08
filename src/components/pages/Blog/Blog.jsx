import React from "react";

const Blog = () => {
  return (
    <div className="w-3/4 mx-auto border rounded-xl">
      <div className="collapse rounded-lg my-3">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-emerald-800 text-primary-content peer-checked:bg-sky-900 peer-checked:text-secondary-content">
          What it the difference between SQL & no SQL?
        </div>
        <div className="collapse-content my-2 bg-primary text-primary-content peer-checked:bg-sky-900 peer-checked:text-secondary-content">
          <p>
            <strong>SQL</strong>: Structured Query Language or SQL is a standard
            Daabase language which is used to create, maintain and retrieve the
            data from relational databases like MySQL, Oracle, SQL Server,
            PostGre, etc.
            <strong>noSQL</strong>: originally referring to non SQL or non
            relational is a database that provides a mechanism for storage and
            retrieval of data. This data is modeled in means other than the
            tabular relations used in relational databases. Such databases came
            into existence in the late 1960s, but did not obtain the NoSQL
            moniker until a surge of popularity in the early twenty-first
            century. NoSQL databases are used in real-time web applications and
            big data and their use are increasing over time. NoSQL systems are
            also sometimes called Not only SQL to emphasize the fact that they
            may support SQL-like query languages. A NoSQL database includes
            simplicity of design, simpler horizontal scaling to clusters of
            machines and finer control over availability.
          </p>
        </div>
      </div>
      <div className="collapse rounded-lg my-3">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-emerald-800 text-primary-content peer-checked:bg-sky-900 peer-checked:text-secondary-content">
          What is JWT and How does it work?
        </div>
        <div className="collapse-content my-2 bg-primary text-primary-content peer-checked:bg-sky-900 peer-checked:text-secondary-content">
          <p>
            <strong>JWT</strong>: JWT, or JSON Web Token, is an open standard
            used to share security information between two parties — a client
            and a server. Each JWT contains encoded JSON objects, including a
            set of claims. JWTs are signed using a cryptographic algorithm to
            ensure that the claims cannot be altered after the token is issued.{" "}
            <br />
            <strong>How it Works</strong>: JWTs differ from other web tokens in
            that they contain a set of claims. Claims are used to transmit
            information between two parties. What these claims are depends on
            the use case at hand. For example, a claim may assert who issued the
            token, how long it is valid for, or what permissions the client has
            been granted. A JWT is a string made up of three parts, separated by
            dots (.), and serialized using base64. In the most common
            serialization format, compact serialization, the JWT looks something
            like this: xxxxx.yyyyy.zzzzz. Once decoded, you will get two JSON
            strings: The header and the payload. The signature. The JOSE (JSON
            Object Signing and Encryption) header contains the type of token —
            JWT in this case — and the signing algorithm. <br />
            <br />
            The payload contains the claims. This is displayed as a JSON string,
            usually containing no more than a dozen fields to keep the JWT
            compact. This information is typically used by the server to verify
            that the user has permission to perform the action they are
            requesting. <br />
            <br />
            There are no mandatory claims for a JWT, but overlaying standards
            may make claims mandatory. For example, when using JWT as bearer
            access token under OAuth2.0, iss, sub, aud, and exp must be present.
            some are more common than others. <br />
            <br />
            The signature ensures that the token hasn’t been altered. The party
            that creates the JWT signs the header and payload with a secret that
            is known to both the issuer and receiver, or with a private key
            known only to the sender. When the token is used, the receiving
            party verifies that the header and payload match the signature.
          </p>
        </div>
      </div>
      <div className="collapse rounded-lg my-3">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-emerald-800 text-primary-content peer-checked:bg-sky-900 peer-checked:text-secondary-content">
          What is the difference between Node & Javascript.
        </div>
        <div className="collapse-content my-2 bg-emerald-800 text-primary-content peer-checked:bg-sky-900 peer-checked:text-secondary-content">
          <p>
            <strong>NodeJS</strong>: NodeJS is a cross-platform and opensource
            Javascript runtime environment that allows the javascript to be run
            on the server-side. Nodejs allows Javascript code to run outside the
            browser. Nodejs comes with a lot of modules and mostly used in web
            development.
            <strong>JavaScript</strong>: Javascript is a Scripting language. It
            is mostly abbreviated as JS. It can be said that Javascript is the
            updated version of the ECMA script. Javascript is a high-level
            programming language that uses the concept of Oops but it is based
            on prototype inheritance.
          </p>
        </div>
      </div>
      <div className="collapse rounded-lg my-3">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-emerald-800 text-primary-content peer-checked:bg-sky-900 peer-checked:text-secondary-content">
          How does node js handle multiple request at the same time?
        </div>
        <div className="collapse-content my-2 bg-emerald-800 text-primary-content peer-checked:bg-sky-900 peer-checked:text-secondary-content">
          <p>
            We know NodeJS application is single-threaded. Say, if processing
            involves request A that takes 10 seconds, it does not mean that a
            request which comes after this request needs to wait 10 seconds to
            start processing because NodeJS event loops are only
            single-threaded. The entire NodeJS architecture is not
            single-threaded. <br />
            <br />
            <strong>How NodeJS handle multiple client requests!!!</strong>
            <br />
            <br />
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. If NodeJS can process the request without I/O
            blocking then the event loop would itself process the request and
            sends the response back to the client by itself. But, it is possible
            to process multiple requests parallelly using the NodeJS cluster
            module or worker_threads module.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
