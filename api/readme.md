# take-home-fronteng

![image](https://user-images.githubusercontent.com/18698923/235904899-cf3d4893-38d5-4ffc-ba9b-32cade454833.png)


👋 Hello! Meet Dr Schmidt, a stressed-out senior cardiologist at P1 Generograd Medical Center. The patient inflow in the last few hours has been massive and his team had trouble organizing patient info and prioitizing cases. As the developer on site you suggest a simple React app to gather patient info and status before the patient has even entered the Medical Center. Dr Schmidt hastly agrees with your solution but the look on his face leaves you wondering whether he has understood the task at hand. In the ER's waiting room you yank out your laptop and start building a prototype. 

**Tasks:**  
1.  Build a "Contact Form" page that has the following five inputs: name, surname, phone, date of birth, and text. 
2. `Optional` Build a second page that displays all the contact form submissions that are stored in our backend (which we have provided)

**Specification:**

Here are some functionalities that we would like you to implement:

✅ Field Validation:
- Phone number: Optional country code and then 10 digits (we're thinking of only Greek phone numbers)
- Birth date: Proper date format
- Automatically add slashes or dots to the date field

✅ At least one animation: For example, you can add a spinning circle when the form is being sent.

✅ Contact form look is important: We want the form to have a professional design that is visually appealing.

❌ Restrictions: We have two restrictions:
- No validation library is allowed
- No pre-made CSS is allowed (e.g., MUI)

We're looking forward to seeing what you can create! For more information on the backend api check [Backend API](#backend-api).

For any questions feel free to email me at: belmpas.theofilos [at] praxis-eins.de

***

## Backend API

There are two endpoints, that

### GET `/contacts`

Returns all contact forms info available in the backend's database (used `OPTIONALLY`)

**Responses**
* Response 200 (application/json)
  ```json
  [
    {
      "name": "Morty",
      "surname": "Smith",
      "phone": "+306971119977",
      "birthDate": "2009-05-17",
      "text": "SOS!!! We need to go to Forbodulon Prime ASAP... need the crystals!"
    },
    // other objects ...
  ]
  ```

### POST `/contacts`

Adds a new entry in the contact form database (data must be valid). Every request needs a non empty body

**Body**
```json
{
  "name": string,
  "surname": string,
  "phone": string,
  "birthDate": string,
  "text": string,
}
```

**Responses**
* Response 200 (application/json)
  ```json
  {
    "message":"Contact added successfully"
  }
  ```
* Response 400 (application/json), if body is not correctly defined
  ```json
  {
    "error":"Input data is not valid ContactInfo"
  }
  ```
### How to run

**Prerequisites** Given that nodejs is insatlled:
* Install node modules
    ```bash
    npm ci
    ```
* Set up env variables in `.env` file
    ```bash
    BACK_HOST=localhost
    BACK_PORT=8081
    ```

**To start** use
```bash
npm start
```

**To test** its functionality here are two curl commands. If you changed the url and/or port also change it here
 * ```bash
    curl -X GET localhost:8081/contacts
   ```
 * ```bash
    curl -X POST localhost:8081/contacts \
        -d '{"name":"Best","surname":"FrontEndDev","phone":"+306971119977","birthDate":"2009-05-17","text":"Test"}' \
        -H 'Content-Type: application/json'
   ```
