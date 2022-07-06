"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),y=i,c=u["".concat(l,".").concat(y)]||u[y]||m[y]||o;return a?n.createElement(c,r(r({ref:t},p),{},{components:a})):n.createElement(c,r({ref:t},p))}));function y(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5259:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const o={id:"what-is-dynamodb-toolbox",title:"What is DynamoDB Toolbox?",slug:"/"},r="What is DynamoDB Toolbox?",s={unversionedId:"introduction/what-is-dynamodb-toolbox",id:"introduction/what-is-dynamodb-toolbox",title:"What is DynamoDB Toolbox?",description:"DynamoDB Toolbox is a set of tools that makes it easy to work with Amazon DynamoDB and the DocumentClient. It's designed with Single Tables in mind, but works just as well with multiple tables. It lets you define your Entities (with typings and aliases) and map them to your DynamoDB tables. You can then generate the API parameters to put, get, delete, update, query, scan, batchGet, and batchWrite data by passing in JavaScript objects. The DynamoDB Toolbox will map aliases, validate and coerce types, and even write complex UpdateExpressions for you. \ud83d\ude09",source:"@site/docs/introduction/what-is-dynamodb-toolbox.md",sourceDirName:"introduction",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/jeremydaly/dynamodb-toolbox/tree/main/docs/docs/introduction/what-is-dynamodb-toolbox.md",tags:[],version:"current",frontMatter:{id:"what-is-dynamodb-toolbox",title:"What is DynamoDB Toolbox?",slug:"/"},sidebar:"docsSidebar",next:{title:"Quick Start",permalink:"/docs/introduction/quick-start"}},l={},d=[{value:"Features",id:"features",level:2},{value:"Conventions and Motivations",id:"conventions-and-motivations",level:2},{value:"Installation and Basic Usage",id:"installation-and-basic-usage",level:2},{value:"Install DynamoDB Toolbox",id:"install-dynamodb-toolbox",level:3},{value:"Define a Table",id:"define-a-table",level:3},{value:"Define an Entity",id:"define-an-entity",level:3},{value:"Put an item",id:"put-an-item",level:3},{value:"Get an Item",id:"get-an-item",level:3},{value:"Entity Type Inference",id:"entity-type-inference",level:3}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-is-dynamodb-toolbox"},"What is DynamoDB Toolbox?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"DynamoDB Toolbox")," is a set of tools that makes it easy to work with ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/dynamodb/"},"Amazon DynamoDB")," and the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-document-client.html"},"DocumentClient"),". It's designed with ",(0,i.kt)("strong",{parentName:"p"},"Single Tables")," in mind, but works just as well with multiple tables. It lets you define your Entities (with typings and aliases) and map them to your DynamoDB tables. You can then ",(0,i.kt)("strong",{parentName:"p"},"generate the API parameters")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"put"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"delete"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"query"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"scan"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"batchGet"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"batchWrite")," data by passing in JavaScript objects. The DynamoDB Toolbox will map aliases, validate and coerce types, and even write complex ",(0,i.kt)("inlineCode",{parentName:"p"},"UpdateExpression"),"s for you. \ud83d\ude09"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h3",{parentName:"div",id:"this-is-not-an-orm"},"This is NOT an ORM!"),(0,i.kt)("p",{parentName:"div"},"There are several really good Object-Relational Mapping tools (ORMs) out there for DynamoDB. There's the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/awslabs/dynamodb-data-mapper-js"},"Amazon DynamoDB DataMapper For JavaScript"),", ",(0,i.kt)("a",{parentName:"p",href:"https://awspilot.dev/"},"@Awspilot's DynamoDB")," project, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/baseprime/dynamodb"},"@baseprime's dynamodb")," package, and many more."),(0,i.kt)("p",{parentName:"div"},"If you like working with ORMs, that's great, and you should definitely give these projects a look. But personally, I really dislike ORMs (especially ones for relational databases). I typically find them cumbersome and likely to generate terribly inefficient queries (you know who you are). So this project is not an ORM, or at least it's not trying to be. This library helps you generate the necessary parameters needed to interact with the DynamoDB API by giving you a ",(0,i.kt)("strong",{parentName:"p"},"consistent interface")," and ",(0,i.kt)("strong",{parentName:"p"},"handling all the heavy lifting")," when working with the DynamoDB API. For convenience, this library will call the DynamoDB API for you and automatically parse the results, but you're welcome to just let it generate all (or just some) of the parameters for you. Hopefully this library will make the vast majority of your DynamoDB interactions super simple, and maybe even a little bit fun! \ud83d\ude0e"))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Table Schemas and DynamoDB Typings:")," Define your Table and Entity data models using a simple JavaScript object structure, assign DynamoDB data types, and optionally set defaults."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Magic UpdateExpressions:")," Writing complex ",(0,i.kt)("inlineCode",{parentName:"li"},"UpdateExpression")," strings is a major pain, especially if the input data changes the underlying clauses or requires dynamic (or nested) attributes. This library handles everything from simple ",(0,i.kt)("inlineCode",{parentName:"li"},"SET")," clauses, to complex ",(0,i.kt)("inlineCode",{parentName:"li"},"list")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"set")," manipulations, to defaulting values with smartly applied ",(0,i.kt)("inlineCode",{parentName:"li"},"if_not_exists()")," to avoid overwriting data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Bidirectional Mapping and Aliasing:")," When building a single table design, you can define multiple entities that map to the same table. Each entity can reuse fields (like ",(0,i.kt)("inlineCode",{parentName:"li"},"pk")," and",(0,i.kt)("inlineCode",{parentName:"li"},"sk"),") and map them to different aliases depending on the item type. Your data is automatically mapped correctly when reading and writing data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Type Coercion and Validation:")," Automatically coerce values to strings, numbers and booleans to ensure consistent data types in your DynamoDB tables. Validate ",(0,i.kt)("inlineCode",{parentName:"li"},"list"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"map"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"set")," types against your data. Oh yeah, and ",(0,i.kt)("inlineCode",{parentName:"li"},"set"),"s are automatically handled for you. \ud83d\ude09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Powerful Query Builder:")," Specify a ",(0,i.kt)("inlineCode",{parentName:"li"},"partitionKey"),", and then easily configure your sortKey conditions, filters, and attribute projections to query your primary or secondary indexes. This library can even handle pagination with a simple ",(0,i.kt)("inlineCode",{parentName:"li"},".next()")," method."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Simple Table Scans:")," Scan through your table or secondary indexes and add filters, projections, parallel scans and more. And don't forget the pagination support with ",(0,i.kt)("inlineCode",{parentName:"li"},".next()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Filter and Condition Expression Builder:")," Build complex Filter and Condition expressions using a standardized ",(0,i.kt)("inlineCode",{parentName:"li"},"array")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"object")," notation. No more appending strings!"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Projection Builder:")," Specify which attributes and paths should be returned for each entity type, and automatically filter the results."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Secondary Index Support:")," Map your secondary indexes (GSIs and LSIs) to your table, and dynamically link your entity attributes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Batch Operations:")," Full support for batch operations with a simpler interface to work with multiple entities and tables."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Transactions:")," Full support for transaction with a simpler interface to work with multiple entities and tables."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Default Value Dependency Graphs:")," Create dynamic attribute defaults by chaining other dynamic attribute defaults together."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"TypeScript Support:")," v0.4 of this library provides strong typing support AND type inference \ud83d\ude0d. Inferred type can still overriden with ",(0,i.kt)("a",{parentName:"li",href:"/docs/type-inference/#overlays"},"Overlays"),". Some ",(0,i.kt)("a",{parentName:"li",href:"/docs/type-inference/#utility-types"},"Utility Types")," are also exposed. Additional work is still required to support schema validation & typings.")),(0,i.kt)("h2",{id:"conventions-and-motivations"},"Conventions and Motivations"),(0,i.kt)("p",null,"One of the most important goals of this library is to be as ",(0,i.kt)("strong",{parentName:"p"},"unopinionated"),' as possible, giving you the flexibility to bend it to your will and build amazing applications. But another important goal is developer efficiency and ease of use. In order to balance these two goals, some assumptions had to be made. These include the "default" behavior of the library (all of which, btw, can be disabled with a simple configuration change).'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"autoExecute")," and ",(0,i.kt)("inlineCode",{parentName:"strong"},"autoParse")," are enabled by default."),' The original version of this library only handled limited "parameter generation", so it was necessary for you to pass the payloads to the ',(0,i.kt)("inlineCode",{parentName:"li"},"DocumentClient"),". The library now provides support for all API options for each supported method, so by default, it will make the DynamoDB API call and parse the results, saving you redundant code. If you'd rather it didn't do this, you can disable it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"It assumes a Single Table DynamoDB design.")," Watch the Rick Houlihan videos and read ",(0,i.kt)("a",{parentName:"li",href:"https://www.dynamodbbook.com"},"Alex DeBrie's book"),'. The jury is no longer out on this: Single Table designs are what all the cool kids are doing. This library assumes that you will have multiple "Entities" associated with a single "Table", so this requires you to instantiate a ',(0,i.kt)("inlineCode",{parentName:"li"},"Table")," and add at least one ",(0,i.kt)("inlineCode",{parentName:"li"},"Entity")," to it. If you have multiple ",(0,i.kt)("inlineCode",{parentName:"li"},"Table"),"s and just one ",(0,i.kt)("inlineCode",{parentName:"li"},"Entity")," type per ",(0,i.kt)("inlineCode",{parentName:"li"},"Table"),", that's fine, it'll still make your life much easier. Also, ",(0,i.kt)("inlineCode",{parentName:"li"},"batchGet")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"batchWrite")," support multiple tables, so we've got you covered."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Entity Types are added to all items."),' Since this library assumes a Single Table design, it needs a way to reliably distinguish between Entity types. It does this by adding an "Entity Type" attribute to each item in your table named ',(0,i.kt)("inlineCode",{parentName:"li"},"_et")," (short for \"Entity Type\"). Don't like this? Well, you can either disable it completely (but the library won't be able to parse entities into their aliases for you), or change the attribute name to something more snappy. It is purposefully short to minimize table storage (because item storage size includes the attribute names). Also, by default, Entities will alias this field to ",(0,i.kt)("inlineCode",{parentName:"li"},"entity")," (but you can change that too)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Created and modified timestamps are enabled by default.")," I can't think of many instances where created and modified timestamps aren't used in database records, so the library automatically adds ",(0,i.kt)("inlineCode",{parentName:"li"},"_ct")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"_md")," attributes when items are ",(0,i.kt)("inlineCode",{parentName:"li"},"put")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"update"),"d. Again, these are kept purposefully short. You can disable them, change them, or even implement them yourself if you really want. By default, Entities will alias these attributes to ",(0,i.kt)("inlineCode",{parentName:"li"},"created")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"modified")," (customizable, of course), and will automatically apply an ",(0,i.kt)("inlineCode",{parentName:"li"},"if_not_exists()")," on updates so that the ",(0,i.kt)("inlineCode",{parentName:"li"},"created")," date isn't overwritten."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Option names have been shortened using camelCase.")," Nothing against long and descriptive names, but typing ",(0,i.kt)("inlineCode",{parentName:"li"},"ReturnConsumedCapacity")," over and over again just seems like extra work. For simplification purposes, all API request parameters have been shortened to things like ",(0,i.kt)("inlineCode",{parentName:"li"},"capacity"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"consistent")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"metrics"),". The documentation shows which parameter they map to, but they should be intuitive enough to guess."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"All configurations and options are plain JavaScript ",(0,i.kt)("inlineCode",{parentName:"strong"},"objects"),".")," There are lots of JS libraries that use function chaining (like ",(0,i.kt)("inlineCode",{parentName:"li"},"table.query('some pk value').condition('some condition').limit(50)"),"). I really like this style for lots of use cases, but it ",(0,i.kt)("strong",{parentName:"li"},"just feels wrong")," to me when using DynamoDB. DynamoDB is the OG of cloud native databases. It's configured using IaC and its API is HTTP-based and uses structured JSON, so writing queries and other interactions using its native format just seems like the right thing to do. IMO, this makes your code more explicit and easier to reason about. Your ",(0,i.kt)("inlineCode",{parentName:"li"},"options")," could actually be stored as JSON and (unless you're using functions to define defaults on Entity attributes) your Table and Entity configurations could be too."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"API responses match the DynamoDB API responses.")," Something else I felt strongly about was the response signature returned by the library's methods. The DynamoDB Toolbox is a tool to help you interact with the DynamoDB API, ",(0,i.kt)("strong",{parentName:"li"},"NOT a replacement for it"),". ORMs typically trade ease of use with a tremendous amount of lock-in. But at the end of the day, it's just generating queries (and probably bad ones at that). DynamoDB Toolbox provides a number of helpful features to make constructing your API calls easier and more consistent, but the exact payload is always available to you. You can rip out this library whenever you want and just use the raw payloads if you really wanted to. This brings us to the responses. Other than aliasing the ",(0,i.kt)("inlineCode",{parentName:"li"},"Items")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Attributes")," returned from DynamoDB, the structure and format of the responses is the ",(0,i.kt)("strong",{parentName:"li"},"exact same")," (including any other meta data returned). This not only makes the library (kind of) future proof, but also allows you to reuse or repurpose any code or tools you've already written to deal with API responses."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Attributes with NULL values are removed (by default).")," This was a hard one. I actually ran a ",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/jeremy_daly/status/1256259584819449856"},"Twitter poll")," to see how people felt about this, and although the reactions were mixed, ",(0,i.kt)("em",{parentName:"li"},'"Remove the attributes"')," came out on top. I can understand the use cases for ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL"),"s, but since NoSQL database attribute names are part of the storage considerations, it seems more logical to simply check for the absence of an attribute, rather than a ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL")," value. You may disagree with me, and that's cool. I've provided a ",(0,i.kt)("inlineCode",{parentName:"li"},"removeNullAttributes")," table setting that allows you to disable this and save ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL")," attributes to your heart's content. I wouldn't, but the choice is yours.")),(0,i.kt)("p",null,"Hopefully these all make sense and will make working with the library easier."),(0,i.kt)("h2",{id:"installation-and-basic-usage"},"Installation and Basic Usage"),(0,i.kt)("h3",{id:"install-dynamodb-toolbox"},"Install DynamoDB Toolbox"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm i dynamodb-toolbox\n\n# yarn\nyarn add dynamodb-toolbox\n")),(0,i.kt)("p",null,"Require or import ",(0,i.kt)("inlineCode",{parentName:"p"},"Table")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamodb-toolbox"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Table, Entity } from 'dynamodb-toolbox'\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Please Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This library ",(0,i.kt)("strong",{parentName:"p"},"DOES NOT")," create DynamoDB Tables for you. You must create the tables yourself (either via the console or some form of Infrastructure as Code)."))),(0,i.kt)("h3",{id:"define-a-table"},"Define a Table"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import DynamoDB from 'aws-sdk/clients/dynamodb'\n\nconst DocumentClient = new DynamoDB.DocumentClient({\n  // Specify your client options as usual\n  convertEmptyValue: false\n})\n\n// Instantiate a table\nconst MyTable = new Table({\n  // Specify table name (used by DynamoDB)\n  name: 'my-table',\n\n  // Define partition and sort keys\n  partitionKey: 'pk',\n  sortKey: 'sk',\n\n  // Add the DocumentClient\n  DocumentClient\n})\n")),(0,i.kt)("h3",{id:"define-an-entity"},"Define an Entity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const Customer = new Entity({\n  // Specify entity name\n  name: 'Customer',\n\n  // Define attributes\n  attributes: {\n    id: { partitionKey: true }, // flag as partitionKey\n    sk: { hidden: true, sortKey: true }, // flag as sortKey and mark hidden\n    age: { type: 'number' }, // set the attribute type\n    name: { type: 'string', map: 'data' }, // map 'name' to table attribute 'data'\n    emailVerified: { type: 'boolean', required: true }, // specify attribute as required\n    co: { alias: 'company' }, // alias table attribute 'co' to 'company'\n    status: ['sk', 0], // composite key mapping\n    date_added: ['sk', 1] // composite key mapping\n  },\n\n  // Assign it to our table\n  table: MyTable\n\n  // In Typescript, the \"as const\" statement is needed for type inference\n} as const)\n")),(0,i.kt)("h3",{id:"put-an-item"},"Put an item"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Create an item (using table attribute names or aliases)\nconst customer = {\n  id: 123,\n  age: 35,\n  name: 'Jane Smith',\n  emailVerified: true,\n  company: 'ACME',\n  status: 'active',\n  date_added: '2020-04-24'\n}\n\n// Use the 'put' method of Customer:\nawait Customer.put(customer)\n")),(0,i.kt)("p",null,"The item will be saved to DynamoDB like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  "pk": 123,\n  "sk": "active#2020-04-24",\n  "age": 35,\n  "data": "Jane Smith",\n  "emailVerified": true,\n  "co": "ACME",\n  // Attributes auto-generated by DynamoDB-Toolbox\n  "_et": "customer", // Entity name (required for parsing)\n  "_ct": "2021-01-01T00:00:00.000Z", // Item creation date (optional)\n  "_md": "2021-01-01T00:00:00.000Z" // Item last modification date (optional)\n}\n')),(0,i.kt)("h3",{id:"get-an-item"},"Get an Item"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Specify primary key\nconst primaryKey = {\n  id: 123,\n  status: 'active',\n  date_added: '2020-04-24'\n}\n\n// Use the 'get' method of Customer\nconst response = await Customer.get(primaryKey)\n")),(0,i.kt)("h3",{id:"entity-type-inference"},"Entity Type Inference"),(0,i.kt)("p",null,"Since v0.4, the method inputs, options and response types are inferred from the Entity definition:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await Customer.put({\n  id: 123,\n  // \u274c Sort key is required (\"sk\" or both \"status\" and \"date_added\")\n  age: 35,\n  name: ['Jane', 'Smith'], // \u274c name should be a string\n  emailVerified: undefined, // \u274c attribute is marked as required\n  company: 'ACME'\n})\n\nconst { Item: customer } = await Customer.get({\n  id: 123,\n  status: 'active',\n  date_added: '2020-04-24' // \u2705 Valid primary key\n})\ntype Customer = typeof customer\n// \ud83d\ude4c Type is equal to:\ntype ExpectedCustomer =\n  | {\n      id: any\n      age?: number | undefined\n      name?: string | undefined\n      emailVerified: boolean\n      company?: any\n      status: any\n      date_added: any\n      entity: string\n      created: string\n      modified: string\n    }\n  | undefined\n")))}m.isMDXComponent=!0}}]);