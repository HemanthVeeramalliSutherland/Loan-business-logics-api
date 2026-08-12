# Loan Request & Approval Management

## Overview

Loan Request & Approval Management is a Neutrinos-based loan processing application that manages the complete loan approval lifecycle.

The application allows authenticated users to:

- Create loan applications
- Save applications as drafts
- Submit loan applications
- Automatically calculate credit/risk information
- Route applications through approval workflow
- Perform Loan Officer Review
- Perform Credit Manager Approval
- Generate Loan Account Number
- Complete loan disbursement
- Track application status and remarks

## Technology Stack

- Neutrinos Alpha Studio
- Neutrinos SSD (Server Service Designer)
- Neutrinos Reels
- Neutrinos BPM
- PostgreSQL
- REST APIs
- IDS / Neutrinos Authentication

## Architecture

Alpha UI
   |
   v
SSD APIs
   |
   +--------> PostgreSQL
   |
   +--------> Reels
   |
   +--------> BPM
                |
                +--> Loan Officer Review
                |
                +--> Credit Manager Approval
                |
                +--> Loan Disbursement
                |
                +--> Closed

## Application Flow

Draft
  |
  v
Submitted
  |
  v
Preliminary Validation
  |
  v
Loan Officer Review
  |
  +---- Reject ---> Rejected / Closed
  |
  v
Credit Manager Approval
  |
  +---- Reject ---> Rejected / Closed
  |
  v
Loan Disbursement
  |
  v
Approved
  |
  v
Closed

## Main Features

### Loan Application

The application captures:

- Applicant Name
- Date of Birth
- Gender
- Mobile Number
- Email
- Address
- Employment Type
- Employer Name
- Monthly Income
- Loan Type
- Loan Amount
- Loan Tenure
- Credit Score
- Purpose of Loan

Interest Rate is calculated using Reels configuration and is not entered manually by the applicant.

## Save Draft

Users can save an incomplete application.

The system generates:

- Application ID
- Application Number

The application is stored with:

`status = DRAFT`

The same application can later be reopened and submitted.

## Submit Application

On submission:

1. Existing application is identified using Application ID.
2. Application status is changed to SUBMITTED.
3. Reels is invoked for decisioning.
4. Risk score and decision are calculated.
5. BPM workflow is started.
6. Application is assigned to Loan Officer.

## Reels

Reels is used for:

- Credit/risk calculation
- Risk score calculation
- Interest rate slab determination
- Eligibility decision
- Risk category
- Final decision

## BPM Workflow

The BPM workflow contains:

1. Preliminary Validation
2. Loan Officer Review
3. Credit Manager Approval
4. Loan Disbursement
5. Case Closure

## Loan Officer Review

Loan Officer can:

- Review applicant information
- Review risk information
- Add remarks
- Approve
- Reject

## Credit Manager Approval

Credit Manager can:

- Review application
- Review risk score
- Approve
- Reject
- Modify loan amount when Risk Score < 80

## Loan Disbursement

When the Credit Manager approves:

1. Loan Account Number is generated.
2. Application status becomes APPROVED.
3. Disbursement process is triggered.
4. Case is closed.

## Rejection

When an application is rejected:

- Decision is stored
- Rejection remarks are stored
- Application status is updated
- Workflow moves toward closure

## SSD APIs

### Save Draft

POST `/api/save-draft`

### Submit Loan

POST `/api/submit-loan`

### Loan Officer Review

POST `/api/loan-officer-review`

### Get Loan Application

GET `/api/...`

### Update Loan Application

PUT `/api/...`

### Generate Policy / Disbursement

POST `/api/.../generate-policy`

## Database

Main table:

`loan_application`

Important fields include:

- application_id
- application_number
- customer_name
- dob
- gender
- mobile
- email
- address
- employment_type
- employer_name
- monthly_income
- loan_type
- loan_amount
- loan_tenure
- purpose
- credit_score
- risk_category
- risk_score
- interest_rate
- emi
- status
- decision
- remarks
- loan_account_number
- created_date

## Validation Rules

| Field | Rule |
|---|---|
| Age | 21–60 |
| Mobile | 10 digits |
| Email | Valid email |
| Loan Amount | ₹50,000 – ₹50,00,000 |
| Credit Score | 0.5–4.0 |
| Monthly Income | Positive value |

## Risk Score

The credit ratio is calculated as:

Credit Ratio = Loan Amount / (Monthly Income × 12)

| Ratio | Risk Score |
|---|---:|
| <= 0.5 | 150 |
| > 0.5 – 1.0 | 120 |
| > 1.0 – 2.0 | 80 |
| > 2.0 – 4.0 | 40 |
| > 4.0 | 0 |

## Credit Manager Rule

Loan amount modification is allowed only when:

`Risk Score < 80`

Therefore:

- Risk Score 150 → Not editable
- Risk Score 120 → Not editable
- Risk Score 80 → Not editable
- Risk Score 40 → Editable
- Risk Score 0 → Editable

## Status Lifecycle

DRAFT

→ SUBMITTED

→ PRELIMINARY VALIDATION

→ LOAN OFFICER REVIEW

→ CREDIT MANAGER APPROVAL

→ DISBURSEMENT

→ APPROVED

→ CLOSED

Rejected applications follow:

REJECTED → CLOSED

## Demo

The application can be demonstrated using:

1. Create application
2. Save draft
3. Reopen draft
4. Submit application
5. Reels decision
6. Loan Officer Review
7. Credit Manager Approval
8. Loan Disbursement
9. Loan Account Number generation
10. Final status
