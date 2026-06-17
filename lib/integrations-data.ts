export type IntegrationCategory =
  | "DATA_WAREHOUSE"
  | "EVENT_STREAMING"
  | "OBJECT_STORAGE"
  | "DATA_CATALOG"
  | "ALERTING"
  | "ETL_ORCHESTRATION"
  | "TICKETING"
  | "ANALYTICS";

export interface IntegrationItem {
  name: string;
  slug: string;
  category: IntegrationCategory;
  featured: boolean;
  order: number;
  docUrl?: string;
}

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const RAW: Omit<IntegrationItem, "slug">[] = [
  { name: "Amazon Redshift", category: "DATA_WAREHOUSE", featured: false, order: 1, docUrl: "https://userguide.qualytics.io/add-datastores/redshift/" },
  { name: "Databricks", category: "DATA_WAREHOUSE", featured: true, order: 2, docUrl: "https://userguide.qualytics.io/add-datastores/databricks/" },
  { name: "Google BigQuery", category: "DATA_WAREHOUSE", featured: false, order: 3, docUrl: "https://userguide.qualytics.io/add-datastores/bigquery/" },
  { name: "JDBC", category: "DATA_WAREHOUSE", featured: false, order: 4, docUrl: "https://userguide.qualytics.io/add-datastores/overview-of-a-jdbc-datastore/" },
  { name: "MS SQL Server", category: "DATA_WAREHOUSE", featured: false, order: 5, docUrl: "https://userguide.qualytics.io/add-datastores/microsoft-sql-server/" },
  { name: "MySQL", category: "DATA_WAREHOUSE", featured: false, order: 6, docUrl: "https://userguide.qualytics.io/add-datastores/mysql/" },
  { name: "Oracle", category: "DATA_WAREHOUSE", featured: false, order: 7, docUrl: "https://userguide.qualytics.io/add-datastores/oracle/" },
  { name: "PostgreSQL", category: "DATA_WAREHOUSE", featured: false, order: 8, docUrl: "https://userguide.qualytics.io/add-datastores/postgresql/" },
  { name: "Snowflake", category: "DATA_WAREHOUSE", featured: true, order: 9, docUrl: "https://userguide.qualytics.io/add-datastores/snowflake/" },
  { name: "Amazon Kinesis", category: "EVENT_STREAMING", featured: false, order: 1 },
  { name: "Google Cloud PubSub", category: "EVENT_STREAMING", featured: false, order: 2 },
  { name: "Amazon S3", category: "OBJECT_STORAGE", featured: false, order: 1, docUrl: "https://userguide.qualytics.io/add-datastores/amazon-s3/" },
  { name: "Azure Data Lake", category: "OBJECT_STORAGE", featured: false, order: 2 },
  { name: "Google Cloud Storage", category: "OBJECT_STORAGE", featured: false, order: 3, docUrl: "https://userguide.qualytics.io/add-datastores/google-cloud-storage/" },
  { name: "Oracle Cloud", category: "OBJECT_STORAGE", featured: false, order: 4, docUrl: "https://userguide.qualytics.io/add-datastores/oracle/" },
  { name: "Alation", category: "DATA_CATALOG", featured: true, order: 1, docUrl: "https://userguide.qualytics.io/settings/integrations/data-catalogs/alation/" },
  { name: "Atlan", category: "DATA_CATALOG", featured: true, order: 2, docUrl: "https://userguide.qualytics.io/settings/integrations/data-catalogs/atlan/" },
  { name: "Collibra", category: "DATA_CATALOG", featured: false, order: 3, docUrl: "https://userguide.qualytics.io/settings/integrations/data-catalogs/collibra/" },
  { name: "DataHub", category: "DATA_CATALOG", featured: false, order: 4, docUrl: "https://userguide.qualytics.io/settings/integrations/data-catalogs/datahub/" },
  { name: "Microsoft Purview", category: "DATA_CATALOG", featured: false, order: 5, docUrl: "https://userguide.qualytics.io/settings/integrations/data-catalogs/microsoft-purview/" },
  { name: "Microsoft Teams", category: "ALERTING", featured: false, order: 1, docUrl: "https://userguide.qualytics.io/settings/integrations/alerting/msft_teams/" },
  { name: "PagerDuty", category: "ALERTING", featured: false, order: 2, docUrl: "https://userguide.qualytics.io/flows/notification/#pagerduty" },
  { name: "Slack", category: "ALERTING", featured: false, order: 3, docUrl: "https://userguide.qualytics.io/settings/integrations/alerting/slack/" },
  { name: "Apache Airflow", category: "ETL_ORCHESTRATION", featured: false, order: 1, docUrl: "https://userguide.qualytics.io/settings/integrations/workflow/workflow/" },
  { name: "dbt", category: "ETL_ORCHESTRATION", featured: false, order: 2, docUrl: "https://userguide.qualytics.io/settings/integrations/workflow/workflow/" },
  { name: "Jira", category: "TICKETING", featured: false, order: 1, docUrl: "https://userguide.qualytics.io/settings/integrations/ticketing/jira/" },
  { name: "ServiceNow", category: "TICKETING", featured: false, order: 2, docUrl: "https://userguide.qualytics.io/settings/integrations/ticketing/servicenow/" },
  { name: "PowerBI", category: "ANALYTICS", featured: false, order: 1, docUrl: "https://userguide.qualytics.io/settings/integrations/analytics/analytics/" },
  { name: "Sigma", category: "ANALYTICS", featured: false, order: 2, docUrl: "https://userguide.qualytics.io/settings/integrations/analytics/analytics/" },
  { name: "Tableau", category: "ANALYTICS", featured: false, order: 3, docUrl: "https://userguide.qualytics.io/settings/integrations/analytics/analytics/" },
];

export const INTEGRATIONS_CATALOG: IntegrationItem[] = RAW.map((item) => ({
  ...item,
  slug: slugify(item.name),
}));

export const INTEGRATION_CATEGORIES = [
  "ALL",
  "DATA_WAREHOUSE",
  "EVENT_STREAMING",
  "OBJECT_STORAGE",
  "DATA_CATALOG",
  "ALERTING",
  "ETL_ORCHESTRATION",
  "TICKETING",
  "ANALYTICS",
] as const;

export const CATEGORY_LABELS: Record<string, string> = {
  ALL: "All",
  DATA_WAREHOUSE: "Data Warehouses",
  EVENT_STREAMING: "Event Streaming",
  OBJECT_STORAGE: "Object Storage",
  DATA_CATALOG: "Data Catalogs",
  ALERTING: "Alerting",
  ETL_ORCHESTRATION: "ETL & Orchestration",
  TICKETING: "Ticketing",
  ANALYTICS: "Analytics",
};
