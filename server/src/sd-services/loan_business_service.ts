// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import cookieParser from 'cookie-parser'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import { dirname } from 'path'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class loan_business_service {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'loan_business_service';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new loan_business_service(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_loan_business_service_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: loan_business_service');
    //appendnew_flow_loan_business_service_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: loan_business_service');

    this.app['post'](
      `${this.serviceBasePath}/save-draft`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.prepareSaveDraftRequest(bh, parentSpanInst);
          //appendnew_next_sd_8ZOAQ7bdSvwhGrwJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_8ZOAQ7bdSvwhGrwJ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/submit-loan`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_kO8gj7QgAnW5sg73(bh, parentSpanInst);
          //appendnew_next_sd_RKHjL8nmnjxyuyBn
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_RKHjL8nmnjxyuyBn');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/loan-officer-review`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.prepareLoanOfficerReviewScript(bh, parentSpanInst);
          //appendnew_next_sd_wSIgWLe5RrehGMFZ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_wSIgWLe5RrehGMFZ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/credit-manager-approval`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_vA2jw72BfcZOk0Vn(bh, parentSpanInst);
          //appendnew_next_sd_8iFBUZ42AVy9Fc5p
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_8iFBUZ42AVy9Fc5p');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/generate-loan-account`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_3WxhGiR8VvuVFHuc(bh, parentSpanInst);
          //appendnew_next_sd_ygYpv6yX1aEqt05k
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ygYpv6yX1aEqt05k');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/recalculate-loan`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_xSpvvaBwAPBN8Jeb(bh, parentSpanInst);
          //appendnew_next_sd_Zxm07vCKpFD8r87q
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Zxm07vCKpFD8r87q');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_loan_business_service_HttpIn
  }
  //   service flows_loan_business_service

  //appendnew_flow_loan_business_service_start

  async prepareSaveDraftRequest(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareSaveDraftRequest',
      parentSpanInst
    );
    try {
      // let req = bh.input.body;

      // bh.local.applicationId = req.application_id;

      // bh.local.requestBody = req;
      // bh.local.requestBody.status = "Draft";

      // const req = bh.input.body;

      // // Always save as Draft
      // req.status = "Draft";

      // // Wrap for CRUD API
      // bh.local.requestBody = {
      //     loan_application: req
      // };

      // console.log("===== INPUT BODY =====");
      // console.log(JSON.stringify(bh.input.body, null, 2));

      // const req = bh.input.body;

      // req.status = "Draft";

      // bh.local.requestBody = {
      //     loan_application: req
      // };

      // console.log("===== REQUEST BODY =====");
      // console.log(JSON.stringify(bh.local.requestBody, null, 2));
      // console.log("===== SAVE DRAFT INPUT =====");
      // console.log(JSON.stringify(bh.input.body, null, 2));

      // const body = bh.input.body || {};

      // const loan = body.loan_application || body;

      // // Check whether this is an existing draft
      // bh.local.isExistingDraft = !!loan.application_id;

      // // Keep the incoming loan data
      // bh.local.loanApplication = {
      //     ...loan,
      //     status: "DRAFT"
      // };

      // console.log("Existing Draft:", bh.local.isExistingDraft);
      // console.log("Loan Application:");
      // console.log(JSON.stringify(bh.local.loanApplication, null, 2));
      console.log('===== SAVE DRAFT INPUT =====');

      const body = bh.input.body || {};

      console.log(JSON.stringify(body, null, 2));

      const loan = body.loan_application || body;

      // Store the loan application
      bh.local.loanApplication = {
        ...loan,
        status: 'DRAFT',
      };

      // Check application_id
      if (loan.application_id) {
        bh.local.isExistingDraft = 'true';
      } else {
        bh.local.isExistingDraft = 'false';
      }

      console.log('isExistingDraft:', bh.local.isExistingDraft);

      console.log(
        'loanApplication:',
        JSON.stringify(bh.local.loanApplication, null, 2)
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_kuu9RgLV0lbtFJwa(bh, parentSpanInst);
      //appendnew_next_prepareSaveDraftRequest
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_m8USgu904vmX5hsI',
        spanInst,
        'prepareSaveDraftRequest'
      );
    }
  }

  async sd_kuu9RgLV0lbtFJwa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kuu9RgLV0lbtFJwa',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.local.isExistingDraft,
          'false',
          undefined,
          undefined
        )
      ) {
        bh = await this.prepareCreateDraft(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.local.isExistingDraft,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.prepareUpdateDraft(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kuu9RgLV0lbtFJwa',
        spanInst,
        'sd_kuu9RgLV0lbtFJwa'
      );
    }
  }

  async prepareCreateDraft(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareCreateDraft',
      parentSpanInst
    );
    try {
      const loan = bh.local.loanApplication;

      const applicationId = loan.application_id || crypto.randomUUID();

      bh.local.createRequest = {
        loan_application: {
          application_id: applicationId,

          customer_name: loan.customer_name || '',
          dob: loan.dob || null,
          gender: loan.gender || '',

          mobile: loan.mobile || '',
          email: loan.email || '',
          address: loan.address || '',

          employment_type: loan.employment_type || '',
          employer_name: loan.employer_name || '',
          monthly_income: Number(loan.monthly_income || 0),

          loan_type: loan.loan_type || '',
          loan_amount: Number(loan.loan_amount || 0),
          loan_tenure: Number(loan.loan_tenure || 0),

          purpose: loan.purpose || '',

          credit_score: Number(loan.credit_score || 0),
          risk_category: loan.risk_category || '',
          emi: Number(loan.emi || 0),

          status: 'DRAFT',

          loan_account_number: '',
          remarks: '',

          created_date: new Date().toISOString(),

          decision: '',

          interest_rate: Number(loan.interest_rate || 0),
        },
      };

      console.log('===== CREATE DRAFT REQUEST =====');
      console.log(JSON.stringify(bh.local.createRequest, null, 2));
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_L1fBpjKKr49xBt2R(bh, parentSpanInst);
      //appendnew_next_prepareCreateDraft
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_i2i5UinL8ILzSNXp',
        spanInst,
        'prepareCreateDraft'
      );
    }
  }

  async sd_L1fBpjKKr49xBt2R(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://loandb.neutrinos-apps.com/loan-management-db/dm/loan_db/loan_application/create',
        timeout: 30000,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.createRequest,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.createResponse = responseMsg;
      bh = await this.prepareResponse(bh, parentSpanInst);
      //appendnew_next_sd_L1fBpjKKr49xBt2R
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_L1fBpjKKr49xBt2R');
    }
  }

  async prepareResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareResponse',
      parentSpanInst
    );
    try {
      // bh.local.response = {
      //     success: true,
      //     message: "Loan saved successfully",
      //     data: bh.local.updateResponse
      // };

      // console.log("===== CRUD RESPONSE =====");
      // console.log(JSON.stringify(bh.local.updateResponse, null, 2));

      // bh.local.output = {
      //     success: true,
      //     data: bh.local.updateResponse
      // };

      let response;

      if (bh.local.createResponse) {
        response = bh.local.createResponse;
      } else {
        response = bh.local.updateResponse;
      }

      console.log('===== CRUD RESPONSE =====');

      console.log(JSON.stringify(response, null, 2));

      bh.local.output = {
        success: true,
        message: 'Draft saved successfully',
        data: response,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_18gFPQjmlB2MGN54(bh, parentSpanInst);
      //appendnew_next_prepareResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yfgyIEQfSCseFnYp',
        spanInst,
        'prepareResponse'
      );
    }
  }

  async sd_18gFPQjmlB2MGN54(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.output);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_18gFPQjmlB2MGN54');
    }
  }

  async prepareUpdateDraft(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareUpdateDraft',
      parentSpanInst
    );
    try {
      const loan = bh.local.loanApplication;

      bh.local.updateRequest = {
        loan_application: {
          ...loan,

          status: 'DRAFT',
        },
      };

      console.log('===== UPDATE DRAFT REQUEST =====');

      console.log(JSON.stringify(bh.local.updateRequest, null, 2));
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CNKH3aMFT8xOsBjr(bh, parentSpanInst);
      //appendnew_next_prepareUpdateDraft
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6DwIkIsqPF8Fu6oK',
        spanInst,
        'prepareUpdateDraft'
      );
    }
  }

  async sd_CNKH3aMFT8xOsBjr(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://loandb.neutrinos-apps.com/loan-management-db/dm/loan_db/loan_application/update-by-id',
        timeout: 30000,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.updateRequest,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.updateResponse = responseMsg;
      bh = await this.prepareResponse(bh, parentSpanInst);
      //appendnew_next_sd_CNKH3aMFT8xOsBjr
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CNKH3aMFT8xOsBjr');
    }
  }

  async sd_kO8gj7QgAnW5sg73(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kO8gj7QgAnW5sg73',
      parentSpanInst
    );
    try {
      // const req = bh.input.body;

      // console.log("===== SUBMIT INPUT =====");
      // console.log(JSON.stringify(req, null, 2));

      // const existingApplicationId = req.application_id;

      // const hasApplicationId =
      //     existingApplicationId !== undefined &&
      //     existingApplicationId !== null &&
      //     existingApplicationId !== "";

      // console.log("Existing application_id:", existingApplicationId);
      // console.log("hasApplicationId:", hasApplicationId);

      // if (hasApplicationId) {

      //     // =========================
      //     // UPDATE EXISTING DRAFT
      //     // =========================

      //     bh.local.submitType = "UPDATE";

      //     bh.local.loanApplication = {
      //         application_id: req.application_id,
      //         application_number: req.application_number || "",
      //         customer_name: req.customer_name || "",
      //         dob: req.dob || null,
      //         gender: req.gender || "",
      //         mobile: req.mobile || "",
      //         email: req.email || "",
      //         address: req.address || "",
      //         employment_type: req.employment_type || "",
      //         employer_name: req.employer_name || "",
      //         monthly_income: req.monthly_income || 0,
      //         loan_type: req.loan_type || "",
      //         loan_amount: req.loan_amount || 0,
      //         loan_tenure: req.loan_tenure || 0,
      //         purpose: req.purpose || "",
      //         credit_score: req.credit_score || 0,
      //         risk_category: req.risk_category || "",
      //         emi: req.emi || 0,
      //         status: "SUBMITTED",
      //         loan_account_number: req.loan_account_number || "",
      //         remarks: req.remarks || "",
      //         created_date: req.created_date || new Date().toISOString(),
      //         decision: req.decision || "",
      //         interest_rate: req.interest_rate || 0
      //     };

      //     // Generate application number if existing draft doesn't have one
      //     if (!bh.local.loanApplication.application_number) {
      //         bh.local.loanApplication.application_number =
      //             "APP" + Math.floor(10000000 + Math.random() * 90000000);
      //     }

      // } else {

      //     // =========================
      //     // DIRECT SUBMIT
      //     // =========================

      //     bh.local.submitType = "CREATE";

      //     const applicationId =
      //         "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      //             /[xy]/g,
      //             function (c) {
      //                 const r = Math.random() * 16 | 0;
      //                 const v = c === "x"
      //                     ? r
      //                     : (r & 0x3 | 0x8);

      //                 return v.toString(16);
      //             }
      //         );

      //     const applicationNumber =
      //         "APP" + Math.floor(10000000 + Math.random() * 90000000);

      //     bh.local.loanApplication = {
      //         application_id: applicationId,
      //         application_number: applicationNumber,

      //         customer_name: req.customer_name || "",
      //         dob: req.dob || null,
      //         gender: req.gender || "",
      //         mobile: req.mobile || "",

      //         email: req.email || "",
      //         address: req.address || "",

      //         employment_type: req.employment_type || "",
      //         employer_name: req.employer_name || "",
      //         monthly_income: req.monthly_income || 0,

      //         loan_type: req.loan_type || "",
      //         loan_amount: req.loan_amount || 0,
      //         loan_tenure: req.loan_tenure || 0,
      //         purpose: req.purpose || "",

      //         credit_score: req.credit_score || 0,
      //         risk_category: req.risk_category || "",
      //         emi: req.emi || 0,

      //         status: "SUBMITTED",

      //         loan_account_number: req.loan_account_number || "",
      //         remarks: req.remarks || "",

      //         created_date: new Date().toISOString(),

      //         decision: req.decision || "",
      //         interest_rate: req.interest_rate || 0
      //     };
      // }

      // console.log("===== SUBMIT TYPE =====");
      // console.log(bh.local.submitType);

      // console.log("===== SUBMIT APPLICATION =====");
      // console.log(
      //     JSON.stringify(bh.local.loanApplication, null, 2)
      // );
      const body = bh.input.body;

      /*
       * The API request structure is:
       *
       * {
       *   "loan_application": {
       *      ...
       *   }
       * }
       */

      const req = body.loan_application || {};

      console.log('===== SUBMIT INPUT =====');
      console.log(JSON.stringify(body, null, 2));

      console.log('===== LOAN APPLICATION INPUT =====');
      console.log(JSON.stringify(req, null, 2));

      /*
       * ============================================================
       * CHECK EXISTING APPLICATION ID
       * ============================================================
       */

      const existingApplicationId = req.application_id;

      const hasApplicationId =
        existingApplicationId !== undefined &&
        existingApplicationId !== null &&
        String(existingApplicationId).trim() !== '';

      console.log('Existing application_id:', existingApplicationId);

      console.log('hasApplicationId:', hasApplicationId);

      /*
       * ============================================================
       * EXISTING DRAFT / APPLICATION
       * ============================================================
       */

      if (hasApplicationId) {
        console.log('===== EXISTING APPLICATION =====');
        console.log('Using existing application_id:', existingApplicationId);

        bh.local.submitType = 'UPDATE';

        bh.local.loanApplication = {
          /*
           * IMPORTANT:
           * Do NOT generate a new application_id.
           */
          application_id: existingApplicationId,

          application_number: req.application_number || '',

          customer_name: req.customer_name || '',

          dob: req.dob || null,

          gender: req.gender || '',

          mobile: req.mobile || '',

          email: req.email || '',

          address: req.address || '',

          employment_type: req.employment_type || '',

          employer_name: req.employer_name || '',

          monthly_income: req.monthly_income || 0,

          loan_type: req.loan_type || '',

          loan_amount: req.loan_amount || 0,

          loan_tenure: req.loan_tenure || 0,

          purpose: req.purpose || '',

          credit_score: req.credit_score || 0,

          risk_category: req.risk_category || '',

          emi: req.emi || 0,

          status: 'SUBMITTED',

          loan_account_number: req.loan_account_number || '',

          remarks: req.remarks || '',

          created_date: req.created_date || new Date().toISOString(),

          decision: req.decision || '',

          interest_rate: req.interest_rate || 0,
        };

        /*
         * Generate application number only if missing.
         *
         * DO NOT generate application_id.
         */
        if (!bh.local.loanApplication.application_number) {
          bh.local.loanApplication.application_number =
            'APP' + Math.floor(10000000 + Math.random() * 90000000);

          console.log(
            'Generated application_number:',
            bh.local.loanApplication.application_number
          );
        }
      } else {
        /*
         * ============================================================
         * NEW APPLICATION
         * ============================================================
         */

        console.log('===== NEW APPLICATION =====');
        console.log('No application_id found.');

        console.log('Generating new application_id...');

        bh.local.submitType = 'CREATE';

        /*
         * Generate UUID
         */
        const applicationId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
          /[xy]/g,
          function (c) {
            const r = (Math.random() * 16) | 0;

            const v = c === 'x' ? r : (r & 0x3) | 0x8;

            return v.toString(16);
          }
        );

        /*
         * Generate application number
         */
        const applicationNumber =
          'APP' + Math.floor(10000000 + Math.random() * 90000000);

        console.log('Generated application_id:', applicationId);

        console.log('Generated application_number:', applicationNumber);

        bh.local.loanApplication = {
          application_id: applicationId,

          application_number: applicationNumber,

          customer_name: req.customer_name || '',

          dob: req.dob || null,

          gender: req.gender || '',

          mobile: req.mobile || '',

          email: req.email || '',

          address: req.address || '',

          employment_type: req.employment_type || '',

          employer_name: req.employer_name || '',

          monthly_income: req.monthly_income || 0,

          loan_type: req.loan_type || '',

          loan_amount: req.loan_amount || 0,

          loan_tenure: req.loan_tenure || 0,

          purpose: req.purpose || '',

          credit_score: req.credit_score || 0,

          risk_category: req.risk_category || '',

          emi: req.emi || 0,

          status: 'SUBMITTED',

          loan_account_number: req.loan_account_number || '',

          remarks: req.remarks || '',

          created_date: new Date().toISOString(),

          decision: req.decision || '',

          interest_rate: req.interest_rate || 0,
        };
      }

      /*
       * ============================================================
       * FINAL LOGS
       * ============================================================
       */

      console.log('===== SUBMIT TYPE =====');
      console.log(bh.local.submitType);

      console.log('===== FINAL APPLICATION ID =====');
      console.log(bh.local.loanApplication.application_id);

      console.log('===== FINAL APPLICATION NUMBER =====');
      console.log(bh.local.loanApplication.application_number);

      console.log('===== SUBMIT APPLICATION =====');
      console.log(JSON.stringify(bh.local.loanApplication, null, 2));
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_woLlOtrkQMZJ7qC1(bh, parentSpanInst);
      //appendnew_next_sd_kO8gj7QgAnW5sg73
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kO8gj7QgAnW5sg73',
        spanInst,
        'sd_kO8gj7QgAnW5sg73'
      );
    }
  }

  async sd_woLlOtrkQMZJ7qC1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_woLlOtrkQMZJ7qC1',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.local.submitType,
          'CREATE',
          undefined,
          undefined
        )
      ) {
        bh = await this.createResponse(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.local.submitType,
          'UPDATE',
          undefined,
          undefined
        )
      ) {
        bh = await this.prepareUpdateRequest(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_woLlOtrkQMZJ7qC1',
        spanInst,
        'sd_woLlOtrkQMZJ7qC1'
      );
    }
  }

  async createResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createResponse',
      parentSpanInst
    );
    try {
      bh.local.requestBody = {
        loan_application: bh.local.loanApplication,
      };

      console.log('===== CREATE REQUEST =====');
      console.log(JSON.stringify(bh.local.requestBody, null, 2));

      this.tracerService.sendData(spanInst, bh);
      bh = await this.create(bh, parentSpanInst);
      //appendnew_next_createResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jHhyoqyB0ettMTi7',
        spanInst,
        'createResponse'
      );
    }
  }

  async create(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://loandb.neutrinos-apps.com/loan-management-db/dm/loan_db/loan_application/create',
        timeout: 30000,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.requestBody,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.createResponse = responseMsg;
      bh = await this.sd_cmXC2P6KdsmgnkiP(bh, parentSpanInst);
      //appendnew_next_create
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ljJd9jb53GTcCNEr');
    }
  }

  async sd_cmXC2P6KdsmgnkiP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cmXC2P6KdsmgnkiP',
      parentSpanInst
    );
    try {
      console.log('===== SUBMIT SUCCESS =====');

      bh.local.output = {
        success: true,
        message: 'Loan submitted successfully.',
        application_id: bh.local.loanApplication.application_id,
        application_number: bh.local.loanApplication.application_number,
        status: 'SUBMITTED',
        data: bh.local.loanApplication,
      };

      console.log(JSON.stringify(bh.local.output, null, 2));
      this.tracerService.sendData(spanInst, bh);
      await this.sd_YUiD7IkAkwWZTRyM(bh, parentSpanInst);
      //appendnew_next_sd_cmXC2P6KdsmgnkiP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cmXC2P6KdsmgnkiP',
        spanInst,
        'sd_cmXC2P6KdsmgnkiP'
      );
    }
  }

  async sd_YUiD7IkAkwWZTRyM(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.output);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YUiD7IkAkwWZTRyM');
    }
  }

  async prepareUpdateRequest(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareUpdateRequest',
      parentSpanInst
    );
    try {
      console.log('===== UPDATE BRANCH STARTED =====');

      console.log(
        'Loan Application:',
        JSON.stringify(bh.local.loanApplication, null, 2)
      );

      bh.local.requestBody = {
        loan_application: bh.local.loanApplication,
      };

      console.log('===== UPDATE REQUEST BODY =====');

      console.log(JSON.stringify(bh.local.requestBody, null, 2));
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0EvC0nKvOQkt1i9j(bh, parentSpanInst);
      //appendnew_next_prepareUpdateRequest
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FwPhq6bQMIonTs9C',
        spanInst,
        'prepareUpdateRequest'
      );
    }
  }

  async sd_0EvC0nKvOQkt1i9j(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://loandb.neutrinos-apps.com/loan-management-db/dm/loan_db/loan_application/update-by-id',
        timeout: 30000,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.requestBody,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.updateResponse = responseMsg;
      bh = await this.sd_cmXC2P6KdsmgnkiP(bh, parentSpanInst);
      //appendnew_next_sd_0EvC0nKvOQkt1i9j
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0EvC0nKvOQkt1i9j');
    }
  }

  async prepareLoanOfficerReviewScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareLoanOfficerReviewScript',
      parentSpanInst
    );
    try {
      // const loan = bh.input.body.loan_application;
      // console.log(JSON.stringify(bh.input.body, null, 2));
      // loan.decision = bh.input.body.decision;
      // loan.remarks = bh.input.body.remarks;

      // if (bh.input.body.decision === "APPROVE") {
      //     loan.status = "Loan Officer Approved";
      // } else {
      //     loan.status = "Loan Officer Rejected";
      // }

      // bh.local.requestBody = {
      //     loan_application: loan
      // };

      // const loan = bh.input.body.loan_application;
      // console.log("Incoming Body:=================");
      // console.log(JSON.stringify(bh.input.body, null, 2));
      // const decision = loan.decision;
      // const remarks = loan.remarks;

      // if (decision === "APPROVE") {

      //     loan.status = "Loan Officer Approved";

      // } else {

      //     loan.status = "Loan Officer Rejected";

      // }

      // loan.remarks = remarks;
      // loan.decision = decision;

      // bh.local.requestBody = {
      //     loan_application: loan
      // };

      const loan = bh.input.body.loan_application;

      if (!loan) {
        throw new Error('loan_application is required');
      }

      const decision = loan.decision;

      if (decision !== 'APPROVE' && decision !== 'REJECT') {
        throw new Error('Decision must be APPROVE or REJECT');
      }

      if (decision === 'APPROVE') {
        loan.status = 'Loan Officer Approved';
      } else {
        loan.status = 'Loan Officer Rejected';
      }

      bh.local.requestBody = {
        loan_application: loan,
      };

      console.log('===== LOAN OFFICER UPDATE =====');
      console.log(JSON.stringify(bh.local.requestBody, null, 2));
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_tA8LJ98dsZsz6rzd(bh, parentSpanInst);
      //appendnew_next_prepareLoanOfficerReviewScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RXE1Xyh0zHCIlZeG',
        spanInst,
        'prepareLoanOfficerReviewScript'
      );
    }
  }

  async sd_tA8LJ98dsZsz6rzd(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://loandb.neutrinos-apps.com/loan-management-db/dm/loan_db/loan_application/update-by-id',
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.requestBody,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.updateResponse = responseMsg;
      bh = await this.sd_NpoLy9h9LxoomMES(bh, parentSpanInst);
      //appendnew_next_sd_tA8LJ98dsZsz6rzd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tA8LJ98dsZsz6rzd');
    }
  }

  async sd_NpoLy9h9LxoomMES(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NpoLy9h9LxoomMES',
      parentSpanInst
    );
    try {
      bh.local.output = {
        success: true,

        message: 'Loan Officer Review completed successfully.',

        data: bh.local.updateResponse,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_NAaOmSU1x4ATEywB(bh, parentSpanInst);
      //appendnew_next_sd_NpoLy9h9LxoomMES
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NpoLy9h9LxoomMES',
        spanInst,
        'sd_NpoLy9h9LxoomMES'
      );
    }
  }

  async sd_NAaOmSU1x4ATEywB(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.output);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NAaOmSU1x4ATEywB');
    }
  }

  async sd_vA2jw72BfcZOk0Vn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vA2jw72BfcZOk0Vn',
      parentSpanInst
    );
    try {
      // const loan = bh.input.body.loan_application;

      // // Business Rule:
      // // Loan amount can be changed only when credit score < 80

      // if (loan.credit_score < 80) {

      //     console.log("Loan Amount can be modified.");

      // } else {

      //     console.log("Loan Amount cannot be modified.");

      // }

      // // Approval Decision

      // if (loan.decision === "APPROVE") {

      //     loan.status = "Credit Manager Approved";

      // } else {

      //     loan.status = "Credit Manager Rejected";

      // }

      // bh.local.requestBody = {
      //     loan_application: loan
      // };
      const loan = bh.input.body.loan_application;

      if (!loan) {
        throw new Error('loan_application is required');
      }

      const decision = loan.decision;

      if (decision !== 'APPROVE' && decision !== 'REJECT') {
        throw new Error('Decision must be APPROVE or REJECT');
      }

      if (loan.risk_score === undefined || loan.risk_score === null) {
        throw new Error('risk_score is required');
      }

      const riskScore = Number(loan.risk_score);

      if (Number.isNaN(riskScore)) {
        throw new Error('risk_score must be a valid number');
      }

      // Risk Score < 80 means Loan Amount can be modified
      if (riskScore < 80) {
        loan.remarks =
          loan.remarks ||
          'Risk Score is below 80. Loan amount modification is allowed.';
      } else {
        loan.remarks =
          loan.remarks ||
          'Risk Score is 80 or above. Loan amount modification is not allowed.';
      }

      // Credit Manager Approval / Rejection
      if (decision === 'APPROVE') {
        loan.status = 'Credit Manager Approved';
      } else {
        loan.status = 'Credit Manager Rejected';
      }

      bh.local.requestBody = {
        loan_application: loan,
      };

      console.log('===== CREDIT MANAGER UPDATE =====');
      console.log(JSON.stringify(bh.local.requestBody, null, 2));
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_XwdL8LsH4sMkXtVH(bh, parentSpanInst);
      //appendnew_next_sd_vA2jw72BfcZOk0Vn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vA2jw72BfcZOk0Vn',
        spanInst,
        'sd_vA2jw72BfcZOk0Vn'
      );
    }
  }

  async sd_XwdL8LsH4sMkXtVH(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://loandb.neutrinos-apps.com/loan-management-db/dm/loan_db/loan_application/update-by-id',
        timeout: 30000,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.requestBody,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.updateResponse = responseMsg;
      bh = await this.sd_Rmgi7OEqU1u7CR30(bh, parentSpanInst);
      //appendnew_next_sd_XwdL8LsH4sMkXtVH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XwdL8LsH4sMkXtVH');
    }
  }

  async sd_Rmgi7OEqU1u7CR30(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Rmgi7OEqU1u7CR30',
      parentSpanInst
    );
    try {
      bh.local.output = {
        success: true,

        message: 'Credit Manager review completed successfully.',

        data: bh.local.updateResponse,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_mIpppInPocfBN01G(bh, parentSpanInst);
      //appendnew_next_sd_Rmgi7OEqU1u7CR30
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Rmgi7OEqU1u7CR30',
        spanInst,
        'sd_Rmgi7OEqU1u7CR30'
      );
    }
  }

  async sd_mIpppInPocfBN01G(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.output);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mIpppInPocfBN01G');
    }
  }

  async sd_3WxhGiR8VvuVFHuc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3WxhGiR8VvuVFHuc',
      parentSpanInst
    );
    try {
      // // console.log("===== Generate Loan Account =====");

      // // const loan = bh.input.body.loan_application;

      // // console.log("Incoming Loan:");
      // // console.log(JSON.stringify(loan, null, 2));

      // // bh.local.loan = loan;

      // // if (loan.decision === "APPROVE") {

      // //     console.log("Loan Approved.");

      // //     const accountNumber =
      // //         "LN" +
      // //         new Date().getFullYear() +
      // //         Math.floor(100000 + Math.random() * 900000);

      // //     loan.loan_account_number = accountNumber;
      // //     loan.status = "Disbursed";
      // //     loan.remarks = "Loan Account Generated";

      // //     bh.local.requestBody = {
      // //         loan_application: loan
      // //     };

      // //     bh.local.route = "APPROVE";

      // // } else {

      // //     console.log("Loan Rejected.");

      // //     bh.local.route = "REJECT";
      // // }

      // console.log("===== GENERATE LOAN ACCOUNT =====");

      // const loan = bh.input.body.loan_application;

      // if (!loan) {
      //     throw new Error("loan_application is required");
      // }

      // console.log("===== INCOMING LOAN =====");
      // console.log(JSON.stringify(loan, null, 2));

      // bh.local.loan = loan;

      // if (loan.decision === "APPROVE") {

      //     console.log("Loan Approved.");

      //     const accountNumber =
      //         "LN" +
      //         new Date().getFullYear() +
      //         Math.floor(100000 + Math.random() * 900000);

      //     loan.loan_account_number = accountNumber;
      //     loan.status = "Disbursed";
      //     loan.remarks = "Loan Account Generated";

      //     /*
      //      * Prepare complete DB object
      //      */
      //     bh.local.requestBody = {
      //         loan_application: {
      //             application_id: loan.application_id,
      //             application_number: loan.application_number,

      //             customer_name: loan.customer_name || "",
      //             dob: loan.dob || null,
      //             gender: loan.gender || "",
      //             mobile: loan.mobile || "",

      //             email: loan.email || "",
      //             address: loan.address || "",

      //             employment_type: loan.employment_type || "",
      //             employer_name: loan.employer_name || "",
      //             monthly_income: loan.monthly_income || 0,

      //             loan_type: loan.loan_type || "",
      //             loan_amount: loan.loan_amount || 0,
      //             loan_tenure: loan.loan_tenure || 0,
      //             purpose: loan.purpose || "",

      //             credit_score: loan.credit_score || 0,
      //             risk_category: loan.risk_category || "",
      //             emi: loan.emi || 0,

      //             status: "Disbursed",

      //             loan_account_number: accountNumber,

      //             remarks: "Loan Account Generated",

      //             created_date: loan.created_date || new Date().toISOString(),

      //             decision: loan.decision || "",

      //             interest_rate: loan.interest_rate || 0
      //         }
      //     };

      //     bh.local.route = "APPROVE";

      //     console.log("===== UPDATE REQUEST BODY =====");
      //     console.log(
      //         JSON.stringify(bh.local.requestBody, null, 2)
      //     );

      // } else {

      //     console.log("Loan Rejected.");

      //     bh.local.route = "REJECT";
      // }

      const loan = bh.input.body.loan_application;

      if (!loan) {
        throw new Error('loan_application is required');
      }

      if (!loan.application_id) {
        throw new Error('application_id is required');
      }

      if (!loan.application_number) {
        throw new Error('application_number is required');
      }

      if (loan.decision === 'APPROVE') {
        const accountNumber =
          'LN' +
          new Date().getFullYear() +
          Math.floor(100000 + Math.random() * 900000);

        loan.loan_account_number = accountNumber;
        loan.status = 'Disbursed';
        loan.remarks = 'Loan Account Generated';

        bh.local.requestBody = {
          loan_application: loan,
        };

        bh.local.route = 'APPROVE';
      } else {
        bh.local.loan = loan;
        bh.local.route = 'REJECT';
      }

      console.log('===== GENERATE ACCOUNT REQUEST =====');
      console.log(JSON.stringify(bh.local.requestBody, null, 2));
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_PCLoVn1tIEi6NDCh(bh, parentSpanInst);
      //appendnew_next_sd_3WxhGiR8VvuVFHuc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3WxhGiR8VvuVFHuc',
        spanInst,
        'sd_3WxhGiR8VvuVFHuc'
      );
    }
  }

  async sd_PCLoVn1tIEi6NDCh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PCLoVn1tIEi6NDCh',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.local.route,
          'APPROVE',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_6yPFixfNJW8MI6Iu(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.local.route,
          'REJECT',
          undefined,
          undefined
        )
      ) {
        bh = await this.rejectResponse(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PCLoVn1tIEi6NDCh',
        spanInst,
        'sd_PCLoVn1tIEi6NDCh'
      );
    }
  }

  async sd_6yPFixfNJW8MI6Iu(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://loandb.neutrinos-apps.com/loan-management-db/dm/loan_db/loan_application/update-by-id',
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.requestBody,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.updateResponse = responseMsg;
      bh = await this.sd_ZmaXtBvYMpkwza1S(bh, parentSpanInst);
      //appendnew_next_sd_6yPFixfNJW8MI6Iu
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6yPFixfNJW8MI6Iu');
    }
  }

  async sd_ZmaXtBvYMpkwza1S(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZmaXtBvYMpkwza1S',
      parentSpanInst
    );
    try {
      // console.log("Database Updated Successfully");

      // bh.local.output = {

      //     success: true,

      //     message: "Loan Account generated successfully.",

      //     loanAccountNumber:
      //         bh.local.requestBody.loan_application.loan_account_number,

      //     data: bh.input
      // };

      console.log('===== DATABASE UPDATE SUCCESS =====');

      bh.local.output = {
        success: true,

        message: 'Loan Account generated successfully.',

        application_id: bh.local.requestBody.loan_application.application_id,

        application_number:
          bh.local.requestBody.loan_application.application_number,

        loan_account_number:
          bh.local.requestBody.loan_application.loan_account_number,

        status: bh.local.requestBody.loan_application.status,

        data: bh.local.updateResponse,
      };

      console.log(JSON.stringify(bh.local.output, null, 2));
      this.tracerService.sendData(spanInst, bh);
      await this.sd_4qgEW6arJBBwQp65(bh, parentSpanInst);
      //appendnew_next_sd_ZmaXtBvYMpkwza1S
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZmaXtBvYMpkwza1S',
        spanInst,
        'sd_ZmaXtBvYMpkwza1S'
      );
    }
  }

  async sd_4qgEW6arJBBwQp65(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.output);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4qgEW6arJBBwQp65');
    }
  }

  async rejectResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'rejectResponse',
      parentSpanInst
    );
    try {
      console.log('Loan rejected. Account generation skipped.');

      bh.local.output = {
        success: false,

        message:
          'Loan Account cannot be generated because the loan was rejected.',

        decision: bh.local.loan.decision,

        status: bh.local.loan.status,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_zlmMi463NBrWlfLu(bh, parentSpanInst);
      //appendnew_next_rejectResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dj8l0WegIfyM59kv',
        spanInst,
        'rejectResponse'
      );
    }
  }

  async sd_zlmMi463NBrWlfLu(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.local.output);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zlmMi463NBrWlfLu');
    }
  }

  async sd_xSpvvaBwAPBN8Jeb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xSpvvaBwAPBN8Jeb',
      parentSpanInst
    );
    try {
      console.log('===== Recalculate Loan =====');

      const loan = bh.input.body.loan_application;

      // Validation

      if (loan.credit_score >= 80) {
        throw new Error(
          'Loan Amount cannot be modified because Credit Score is greater than or equal to 80.'
        );
      }

      // EMI Calculation

      const P = Number(loan.loan_amount);

      const annualRate = Number(loan.interest_rate);

      const r = annualRate / 12 / 100;

      const n = Number(loan.loan_tenure);

      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

      loan.emi = Number(emi.toFixed(2));

      loan.remarks = 'Loan Amount Updated by Credit Manager';

      bh.local.requestBody = {
        loan_application: loan,
      };

      console.log(JSON.stringify(bh.local.requestBody, null, 2));
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1ER5kmN8TM2F0hHF(bh, parentSpanInst);
      //appendnew_next_sd_xSpvvaBwAPBN8Jeb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xSpvvaBwAPBN8Jeb',
        spanInst,
        'sd_xSpvvaBwAPBN8Jeb'
      );
    }
  }

  async sd_1ER5kmN8TM2F0hHF(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://loandb.neutrinos-apps.com/loan-management-db/dm/loan_db/loan_application/update-by-id',
        timeout: 30000,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.requestBody,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.updateResponse = responseMsg;
      bh = await this.sd_sR9uqcJQDBQQB55Y(bh, parentSpanInst);
      //appendnew_next_sd_1ER5kmN8TM2F0hHF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1ER5kmN8TM2F0hHF');
    }
  }

  async sd_sR9uqcJQDBQQB55Y(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sR9uqcJQDBQQB55Y',
      parentSpanInst
    );
    try {
      bh.local.output = {
        success: true,

        message: 'Loan Amount and EMI updated successfully.',

        data: bh.local.updateResponse,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_icnEAy2REAvtjTJl(bh, parentSpanInst);
      //appendnew_next_sd_sR9uqcJQDBQQB55Y
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sR9uqcJQDBQQB55Y',
        spanInst,
        'sd_sR9uqcJQDBQQB55Y'
      );
    }
  }

  async sd_icnEAy2REAvtjTJl(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.output);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_icnEAy2REAvtjTJl');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_loan_business_service_Catch
}
