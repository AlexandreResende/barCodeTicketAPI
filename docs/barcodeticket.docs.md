
**barCodeTicket API**
----

* **URL**

  <_http://localhost:3000/_>

* **Endpoints**

  /barcodeticket

* **Method:**
 
  <_`GET`_>
  <_`POST`_>

* **Headers Params**

  `Content-Type=[application/json]`</br>


  **Description:**

  >`ticketTypedLine`: Key of the JSON being passed to the API or via query parameter<br />
  >`ticketTypedLineValue`: Value of the ticketTypedLine <br />

  <br />

  **Endpoint:** /barcodeticket?ticketTypedLine=846700000009799001090114001512793801300995016940 <br />
  **Method:** GET

  **Endpoint:** /barcodeticket <br />
  **Method:** POST

  ```
  {
    "ticketTypedLine": "846700000009799001090114001512793801300995016940"
  }
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Endpoint:** /barcodeticket <br />
    **Content:**

    ```
    {
      "ticketData": {
          "value": 79.9,
          "dueDate": "Not available",
          "barCode": "84670000000799001090110015127938030099501694"
      },
      "error": null
    }
    ```
* **Error Response:**

  * **Code:** 400 <br />
    **Endpoint:** /barcodeticket <br />
    **Content:**

    ```
    {
      "ticketData": null,
      "error": "Ticket not valid"
    }
    ```

* **Error Response:**

  * **Code:** 400 Bad Request - Missing Parameters <br />
    **Content:** `{ error : "There are missing parameters for the PnL calculation" }`

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ error : "Internal Server Error" }`