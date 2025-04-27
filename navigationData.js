const navigationData = {
  "Dashboard": {
    "Census": "./dashboard/census",
    "Billing": "./dashboard/billing",
    "Report": "./dashboard/report",
    "Dashboard Confirm List": "./dashboard/dashboard-confirm-list"
  },
  "Resident": {
    "Dashboard": "./resident/dashboard",
    "Pre-Admission": "./resident/pre-admission",
    "Resident Info": "./resident/resident-info",
    "Admission(Clinical)": "./resident/admission-clinical",
    "Census": "./resident/census",
    "Bed Management": "./resident/bed-management",
    "Face Sheet": "./resident/face-sheet",
    "Provider": "./resident/provider",
    "Reports": {
      "Census Report": "./resident/reports/census-report",
      "Admission/Discharge": "./resident/reports/admission-discharge",
      "Face Sheet List": "./resident/reports/face-sheet-list",
      "Resident List": "./resident/reports/resident-list",
      "Clinical Bed Status": "./resident/reports/clinical-bed-status",
      "Billing Bed Status": "./resident/reports/billing-bed-status",
      "Daily Change": "./resident/reports/daily-change",
      "Daily Census Activity": "./resident/reports/daily-census-activity",
      "Census History": "./resident/reports/census-history",
      "BOM Bill Dash Board": "./resident/reports/bom-bill-dashboard",
      "Average Length Of Stay": "./resident/reports/average-length-of-stay",
      "Clinic inpatient Report": "./resident/reports/clinic-inpatient-report",
      "Census Daily Report": "./resident/reports/census-daily-report",
      "Tracking Report": "./resident/reports/tracking-report",
      "Clinical vs. Census Report": "./resident/reports/clinical-vs-census-report"
    },
    "Control": {
      "Delete Resident": "./resident/control/delete-resident",
      "Import Resident": "./resident/control/import-resident",
      "Enterprise Active Resident Roster": "./resident/control/enterprise-active-resident-roster",
      "Search Resident": "./resident/control/search-resident"
    }
  },
  "Billing": {
    "Item Code Entry": {
      "Import Item Charge": "./billing/item-code-entry/import-item-charge",
      "Charge Entry List": "./billing/item-code-entry/charge-entry-list",
      "Special Room Charge Entry": "./billing/item-code-entry/special-room-charge-entry",
      "Recurring Code Entry": "./billing/item-code-entry/recurring-code-entry",
      "Ancillary Code Entry": "./billing/item-code-entry/ancillary-code-entry",
      "Multi Ancillary Item Entry": "./billing/item-code-entry/multi-ancillary-item-entry"
    },
    "Bill & Claim": {
      "Billing Main": "./billing/bill-claim/billing-main",
      "Process Billing": "./billing/bill-claim/process-billing",
      "Bill Log": "./billing/bill-claim/bill-log",
      "277 Reader": "./billing/bill-claim/277-reader",
      "999 Reader": "./billing/bill-claim/999-reader",
      "EDI 837 File": "./billing/bill-claim/edi-837-file",
      "835 Reader": "./billing/bill-claim/835-reader"
    },
    "Payment/Postings": "./billing/payment-postings",
    "Private Pay": {
      "Resident Statement": "./billing/private-pay/resident-statement"
    },
    "Reports": {
      "Resident/Payor Aging": "./billing/reports/resident-payor-aging",
      "Facility Aging Summary": "./billing/reports/facility-aging-summary",
      "Resident Account Report": "./billing/reports/resident-account-report",
      "Census Report": "./billing/reports/census-report",
      "Cash Receipt/Payment Report": "./billing/reports/cash-receipt-payment-report",
      "Medicare Part A Days": "./billing/reports/medicare-part-a-days",
      "Insurance Days Report": "./billing/reports/insurance-days-report",
      "PDPM/RUG Category Report-Summary": "./billing/reports/pdpm-rug-category-report-summary",
      "PDPM/RUG Category Report-Detail": "./billing/reports/pdpm-rug-category-report-detail",
      "Average Length Of Stay": "./billing/reports/average-length-of-stay",
      "RUG Rate": "./billing/reports/rug-rate",
      "Medicaid Temporary Leave Days Report": "./billing/reports/medicaid-temporary-leave-days-report",
      "Aging Memo List": "./billing/reports/aging-memo-list",
      "Default RUG List": "./billing/reports/default-rug-list",
      "Medicare Cost Report": "./billing/reports/medicare-cost-report",
      "Medicare Bad Debt Report": "./billing/reports/medicare-bad-debt-report",
      "Hospice AR Report": "./billing/reports/hospice-ar-report",
      "Therapy Tracking Report": "./billing/reports/therapy-tracking-report",
      "Balance Summary": "./billing/reports/balance-summary",
      "Patient Liability List": "./billing/reports/patient-liability-list",
      "Room Rate List": "./billing/reports/room-rate-list",
      "Item Charge List": "./billing/reports/item-charge-list",
      "Item Summary by Payor": "./billing/reports/item-summary-by-payor",
      "Item Summary by Resident": "./billing/reports/item-summary-by-resident",
      "Bill Exception List": "./billing/reports/bill-exception-list",
      "Aging Report - Credit Balance": "./billing/reports/aging-report-credit-balance",
      "Primary Diagnosis Report": "./billing/reports/primary-diagnosis-report",
      "TAR Expiring Report": "./billing/reports/tar-expiring-report",
      "Consolidated Report": "./billing/reports/consolidated-report"
    },
    "Monthly Close": {
      "GL Close": "./billing/monthly-close/gl-close",
      "GL Close Status": "./billing/monthly-close/gl-close-status",
      "G/L Transaction JDE I/F": "./billing/monthly-close/gl-transaction-jde-if",
      "Adjustment Detail Report": "./billing/monthly-close/adjustment-detail-report",
      "Charge Item Summary Report": "./billing/monthly-close/charge-item-summary-report",
      "Reconciliation - Billed Days": "./billing/monthly-close/reconciliation-billed-days",
      "Reconciliation Report": "./billing/monthly-close/reconciliation-report",
      "Adjustments End of Month": "./billing/monthly-close/adjustments-end-of-month",
      "Item Charge Monthly Report": "./billing/monthly-close/item-charge-monthly-report",
      "Cash Receipt Detail": "./billing/monthly-close/cash-receipt-detail",
      "Cash Receipt Summary": "./billing/monthly-close/cash-receipt-summary",
      "G/L Transaction Summary Report": "./billing/monthly-close/gl-transaction-summary-report",
      "G/L Transaction Detail Report": "./billing/monthly-close/gl-transaction-detail-report",
      "Census Report - End of Month": "./billing/monthly-close/census-report-end-of-month",
      "G/L Detail Report": "./billing/monthly-close/gl-detail-report",
      "Resident Summary Aging": "./billing/monthly-close/resident-summary-aging",
      "Facility Summary Aging": "./billing/monthly-close/facility-summary-aging",
      "Unmatch Balance": "./billing/monthly-close/unmatch-balance"
    },
    "Compliance": {
      "Facility Level": "./billing/compliance/facility-level"
    },
    "ETC": {
      "Consolidated Report": "./billing/etc/consolidated-report"
    },
    "Facility Setup": {
      "Adjustment Factor": "./billing/facility-setup/adjustment-factor",
      "Chart of Account": "./billing/facility-setup/chart-of-account",
      "Revenue Master": "./billing/facility-setup/revenue-master",
      "Revenue Set up": "./billing/facility-setup/revenue-set-up",
      "Revenue Payor Set up": "./billing/facility-setup/revenue-payor-set-up",
      "HCPCS Master": "./billing/facility-setup/hcpcs-master",
      "Facility Layout": "./billing/facility-setup/facility-layout",
      "Facility Demographic": "./billing/facility-setup/facility-demographic",
      "Charge Item Group Management": "./billing/facility-setup/charge-item-group-management",
      "Charge Master – Batch": "./billing/facility-setup/charge-master-batch",
      "Ancillary Charge Master": "./billing/facility-setup/ancillary-charge-master",
      "RUG Rate": "./billing/facility-setup/rug-rate",
      "Medicare Copay Master": "./billing/facility-setup/medicare-copay-master",
      "Facility Basic Settings": "./billing/facility-setup/facility-basic-settings"
    }
  },
  "Trust Fund": {
    "Trust Fund Interest Distribution Report": "./trust-fund/interest-distribution-report",
    "Resident Account": "./trust-fund/resident-account",
    "Trust Fund Audit Report": "./trust-fund/audit-report",
    "Trust Fund Statement": "./trust-fund/statement",
    "Trust Fund Balance Report": "./trust-fund/balance-report",
    "Trust Fund Transaction Report": "./trust-fund/transaction-report"
  },
  "EMR": {
    "Dashboard": "./emr/dashboard",
    "Resident": "./emr/resident",
    "Resident Search": "./emr/resident-search",
    "Resident Summary": "./emr/resident-summary",
    "Bed Management": "./emr/bed-management",
    "Resident Data Collection": "./emr/resident-data-collection",
    "Routine Data Collection": "./emr/routine-data-collection",
    "Event Data Collection": "./emr/event-data-collection",
    "Records List": "./emr/records-list",
    "Change of Condition": "./emr/change-of-condition",
    "Dialysis": "./emr/dialysis",
    "Death Document": "./emr/death-document",
    "Schedule": "./emr/schedule",
    "Physician": "./emr/physician",
    "Resident List": "./emr/resident-list",
    "History & Physical": "./emr/history-physical",
    "Progress Notes": "./emr/progress-notes",
    "Order": "./emr/order",
    "Order Report": "./emr/order-report",
    "Nurse": {
      "eMAR": "./emr/nurse/emar",
      "eTAR": "./emr/nurse/etar",
      "Monitor": "./emr/nurse/monitor",
      "Nursing Note": "./emr/nurse/nursing-note",
      "Advanced Directive": "./emr/nurse/advanced-directive",
      "Order": "./emr/nurse/order",
      "Order Reports": "./emr/nurse/order-reports",
      "Medication Confirm": "./emr/nurse/medication-confirm",
      "Discharge": "./emr/nurse/discharge",
      "Restorative": "./emr/nurse/restorative",
      "Resident Schedule": "./emr/nurse/resident-schedule",
      "Sign Out/In": "./emr/nurse/sign-out-in",
      "Weight Log": "./emr/nurse/weight-log",
      "Vital": "./emr/nurse/vital",
      "Multi-Vital": "./emr/nurse/multi-vital",
      "Medication Refill": "./emr/nurse/medication-refill",
      "Neuro Check": "./emr/nurse/neuro-check",
      "Scan Documents": "./emr/nurse/scan-documents",
      "Special Program": "./emr/nurse/special-program",
      "Note List": "./emr/nurse/note-list"
    },
    "LAB & X-Ray": {
      "LAB & X-Ray": "./emr/lab-xray/lab-xray",
      "LAB & X-Ray by Date": "./emr/lab-xray/lab-xray-by-date"
    },
    "Event Schedule": {
      "Event Attendance": "./emr/event-schedule/event-attendance",
      "Event Master": "./emr/event-schedule/event-master",
      "Event Scheduling": "./emr/event-schedule/event-scheduling",
      "Event Preference": "./emr/event-schedule/event-preference"
    },
    "QAPI": {
      "Incident": "./emr/qapi/incident",
      "Infection": "./emr/qapi/infection",
      "Immunization": "./emr/qapi/immunization",
      "Adverse Events": "./emr/qapi/adverse-events",
      "Internal Reporting List": "./emr/qapi/internal-reporting-list",
      "HIPPS Code Tracking Report": "./emr/qapi/hipps-code-tracking-report",
      "Reports": "./emr/qapi/reports",
      "CMS672 Report": "./emr/qapi/cms672-report",
      "Return To Acute Audit": {
        "Acute care Transfer Log": "./emr/qapi/return-to-acute-audit/acute-care-transfer-log"
      },
      "Reports": {
        "RTA Admission Detail Reports": "./emr/qapi/reports/rta-admission-detail-reports",
        "Transfer Detail Report": "./emr/qapi/reports/transfer-detail-report",
        "Readmission Rate": "./emr/qapi/reports/readmission-rate",
        "RTA Log Creation Report": "./emr/qapi/reports/rta-log-creation-report",
        "Total RTA Report": "./emr/qapi/reports/total-rta-report"
      },
      "Group Report": "./emr/qapi/group-report",
      "Weekly SOC": "./emr/qapi/weekly-soc"
    },
    "ADL": {
      "CNA Assign": "./emr/adl/cna-assign",
      "ADL Plan of Care": "./emr/adl/adl-plan-of-care",
      "ADL Management": "./emr/adl/adl-management",
      "ADL Schedule": "./emr/adl/adl-schedule",
      "ADL Admission Default Setup": "./emr/adl/adl-admission-default-setup"
    },
    "Wound Care": {
      "Daily Wound": "./emr/wound-care/daily-wound",
      "Weekly Wound": "./emr/wound-care/weekly-wound",
      "Wound Report": "./emr/wound-care/wound-report"
    },
    "24H Report": "./emr/24h-report",
    "Set Up": {
      "Dashboard Setup": "./emr/set-up/dashboard-setup"
    },
    "Master": {
      "Diagnosis Master": "./emr/master/diagnosis-master",
      "Allergy Code Master": "./emr/master/allergy-code-master",
      "Assessment Master": "./emr/master/assessment-master",
      "Assessment Trigger": "./emr/master/assessment-trigger",
      "Assessment Access": "./emr/master/assessment-access",
      "CarePlan Trigger": "./emr/master/careplan-trigger",
      "Daily Skilled": "./emr/master/daily-skilled",
      "Clinic Common": "./emr/master/clinic-common",
      "Restorative Master": "./emr/master/restorative-master",
      "Progress Note Master": "./emr/master/progress-note-master",
      "Order Route Trigger": "./emr/master/order-route-trigger",
      "Order Privilege Master": "./emr/master/order-privilege-master",
      "Order Category Master": "./emr/master/order-category-master",
      "Order Route Master": "./emr/master/order-route-master",
      "Order Form Master": "./emr/master/order-form-master",
      "Order Schedule Interval Master": "./emr/master/order-schedule-interval-master",
      "Order Time Master": "./emr/master/order-time-master",
      "Order Time Detail Master": "./emr/master/order-time-detail-master",
      "Order CarePlan Trigger Master": "./emr/master/order-careplan-trigger-master",
      "Order Master": "./emr/master/order-master",
      "Medication Group": "./emr/master/medication-group",
      "Clinic Location Master": "./emr/master/clinic-location-master",
      "Todo Master": "./emr/master/todo-master",
      "Special Program Master": "./emr/master/special-program-master",
      "Assessment Edit Group": "./emr/master/assessment-edit-group",
      "Infection Master": "./emr/master/infection-master",
      "Group Report Master": "./emr/master/group-report-master",
      "Drug Level Privilege": "./emr/master/drug-level-privilege",
      "Assessment Triggering Set-up View": "./emr/master/assessment-triggering-set-up-view",
      "CPOE Common": "./emr/master/cpoe-common",
      "F/U Assessment Trigger Master": "./emr/master/fu-assessment-trigger-master"
    },
    "MDS": {
      "Dashboard": "./emr/mds/dashboard",
      "MDS Management": "./emr/mds/mds-management",
      "Certification and Recerti": "./emr/mds/certification-and-recerti",
      "Resident & Scheduler": {
        "Resident List": "./emr/mds/resident-scheduler/resident-list",
        "Resident's MDS Scheduler": "./emr/mds/resident-scheduler/residents-mds-scheduler"
      },
      "MDS Assessment": {
        "Resident's MDS List": "./emr/mds/mds-assessment/residents-mds-list",
        "RUG Worksheet": "./emr/mds/mds-assessment/rug-worksheet",
        "CAA Worksheet List": "./emr/mds/mds-assessment/caa-worksheet-list"
      },
      "Care Plan": {
        "Resident Care Plan": "./emr/mds/care-plan/resident-care-plan"
      },
      "Config & Masters": {
        "Care Plan Master Library": "./emr/mds/config-masters/care-plan-master-library",
        "MDS RUG Configuration": "./emr/mds/config-masters/mds-rug-configuration",
        "Default A0310 Master": "./emr/mds/config-masters/default-a0310-master",
        "MDS Configuration": "./emr/mds/config-masters/mds-configuration",
        "MDS Support Doc.": "./emr/mds/config-masters/mds-support-doc",
        "PPS/OBRA ARD Schedule": "./emr/mds/config-masters/pps-obra-ard-schedule",
        "QIO Contact Info Setup": "./emr/mds/config-masters/qio-contact-info-setup",
        "A1800/A2100 Mapping Setup": "./emr/mds/config-masters/a1800-a2100-mapping-setup",
        "PDPM Optimizer Function Master": "./emr/mds/config-masters/pdpm-optimizer-function-master"
      },
      "Reports": {
        "CMS672 Report": "./emr/mds/reports/cms672-report",
        "HIPPS Code Tracking Report": "./emr/mds/reports/hipps-code-tracking-report",
        "Medicare Part A Days": "./emr/mds/reports/medicare-part-a-days",
        "MDS Schedule Report": "./emr/mds/reports/mds-schedule-report",
        "Assessment Missing Information": "./emr/mds/reports/assessment-missing-information",
        "Locked/Transmitted Assessments Report": "./emr/mds/reports/locked-transmitted-assessments-report",
        "COT Review Report": "./emr/mds/reports/cot-review-report",
        "End of Therapy OMRA Report": "./emr/mds/reports/end-of-therapy-omra-report",
        "MDS Review for Quality Measures": "./emr/mds/reports/mds-review-for-quality-measures",
        "Medicaid Case Mix Report": "./emr/mds/reports/medicaid-case-mix-report",
        "Notice of Medicare Non-Coverage Report": "./emr/mds/reports/notice-of-medicare-non-coverage-report",
        "MDS Items by Clinician": "./emr/mds/reports/mds-items-by-clinician",
        "Signed MDS Assessment Report": "./emr/mds/reports/signed-mds-assessment-report",
        "Multiple MDS Item by Score/Value Reports": "./emr/mds/reports/multiple-mds-item-by-score-value-reports",
        "Changed History for MDS Items": "./emr/mds/reports/changed-history-for-mds-items",
        "MDS To-do List": "./emr/mds/reports/mds-to-do-list",
        "Bill Category Report Summary": "./emr/mds/reports/bill-category-report-summary",
        "Bill Category Report Detail": "./emr/mds/reports/bill-category-report-detail",
        "Default RUG List": "./emr/mds/reports/default-rug-list"
      }
    }
  },
  "System": {
    "Dashboard": "./system/dashboard",
    "Provider": "./system/provider",
    "User/Access Control": {
      "User Title/Credential": "./system/user-access-control/user-title-credential",
      "User": "./system/user-access-control/user",
      "User Extraction": "./system/user-access-control/user-extraction",
      "Access Control": "./system/user-access-control/access-control",
      "Security Log": "./system/user-access-control/security-log",
      "Unlock User": "./system/user-access-control/unlock-user"
    },
    "Admin": {
      "Implementation": {
        "[1] Facility Setup": {
          "[1.1] Facility Generation": "./system/admin/implementation/facility-setup/facility-generation",
          "[1.2] System Code Setup": "./system/admin/implementation/facility-setup/system-code-setup",
          "[1.3] User Import": "./system/admin/implementation/facility-setup/user-import",
          "[1.4] Provider Import": "./system/admin/implementation/facility-setup/provider-import",
          "[1.5] Facility Layout": "./system/admin/implementation/facility-setup/facility-layout",
          "[1.6] Billing master setup for Clinic": "./system/admin/implementation/facility-setup/billing-master-setup-for-clinic"
        },
        "[3] Clinical Setup": {
          "[3.1] Basic Clinical Master Setup": "./system/admin/implementation/clinical-setup/basic-clinical-master-setup",
          "[3.2] Nurse Shift Setup": "./system/admin/implementation/clinical-setup/nurse-shift-setup",
          "[3.3] Order Basic Master Setup": "./system/admin/implementation/clinical-setup/order-basic-master-setup",
          "[3.4] Med Pass Time Setup": "./system/admin/implementation/clinical-setup/med-pass-time-setup",
          "[3.5] Clinical Layout": "./system/admin/implementation/clinical-setup/clinical-layout",
          "[3.6] Weight List": "./system/admin/implementation/clinical-setup/weight-list"
        },
        "[4] ADL Setup": {
          "[4.1] Basic ADL Master & CNA Shift Setup": "./system/admin/implementation/adl-setup/basic-adl-master-cna-shift-setup"
        },
        "[7] Go Live": {
          "[7.1] EMR Go live data cleansing": "./system/admin/implementation/go-live/emr-go-live-data-cleansing",
          "[7.2] CPOE Go live cleansing & setup": "./system/admin/implementation/go-live/cpoe-go-live-cleansing-setup"
        },
        "Facility": "./system/admin/implementation/facility",
        "Message": "./system/admin/implementation/message",
        "Configuration": "./system/admin/implementation/configuration",
        "Common Code": "./system/admin/implementation/common-code",
        "Menu": "./system/admin/implementation/menu"
      }
    },
    "HQ": {
      "User/Facility": "./system/hq/user-facility",
      "External Access": "./system/hq/external-access"
    },
    "System Log": "./system/system-log",
    "Audit Log": "./system/audit-log",
    "System Report": "./system/system-report",
    "Interface": {
      "Ellora": "./system/interface/ellora",
      "PIMG": "./system/interface/pimg"
    },
    "Backup Files": "./system/backup-files"
  },
  "e-Learning": {
    "Section Master": "./e-learning/section-master",
    "Role Master": "./e-learning/role-master",
    "e-Learning": "./e-learning/e-learning",
    "e-Learning Report": "./e-learning/e-learning-report"
  }
};