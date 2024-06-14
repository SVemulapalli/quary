// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts"
// @generated from file quary/service/v1/wasm_rust_rpc_calls.proto (package quary.service.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AddColumnTestToModelOrSourceColumnRequest, AddColumnTestToModelOrSourceColumnResponse, AddColumnToModelOrSourceRequest, AddColumnToModelOrSourceResponse, CreateModelChartFileRequest, CreateModelChartFileResponse, CreateModelSchemaEntryRequest, CreateModelSchemaEntryResponse, GenerateProjectFilesRequest, GenerateProjectFilesResponse, GenerateSourceFilesRequest, GenerateSourceFilesResponse, GetModelTableRequest, GetModelTableResponse, GetProjectConfigRequest, GetProjectConfigResponse, InitFilesRequest, InitFilesResponse, IsPathEmptyRequest, IsPathEmptyResponse, ListAssetsRequest, ListAssetsResponse, ParseProjectRequest, ParseProjectResponse, RemoveColumnTestFromModelOrSourceColumnRequest, RemoveColumnTestFromModelOrSourceColumnResponse, RenderSchemaRequest, RenderSchemaResponse, ReturnDataForDocViewRequest, ReturnDataForDocViewResponse, ReturnDefinitionLocationsForSQLRequest, ReturnDefinitionLocationsForSQLResponse, ReturnFullProjectDagRequest, ReturnFullProjectDagResponse, ReturnFullSqlForAssetRequest, ReturnFullSqlForAssetResponse, ReturnSQLForInjectedModelRequest, ReturnSQLForInjectedModelResponse, ReturnSQLForSeedsAndModelsRequest, ReturnSQLForSeedsAndModelsResponse, StringifyProjectFileRequest, StringifyProjectFileResponse, UpdateAssetDescriptionRequest, UpdateAssetDescriptionResponse, UpdateModelOrSourceColumnDescriptionRequest, UpdateModelOrSourceColumnDescriptionResponse } from "./wasm_rust_rpc_calls_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * RustWithoutDatabaseService is the service that is used and where the database is not used and so not passed in as a
 * parameter in.
 *
 * @generated from service quary.service.v1.RustWithoutDatabaseService
 */
export const RustWithoutDatabaseService = {
  typeName: "quary.service.v1.RustWithoutDatabaseService",
  methods: {
    /**
     * GetProjectConfig returns the config from quary.yaml
     *
     * @generated from rpc quary.service.v1.RustWithoutDatabaseService.GetProjectConfig
     */
    getProjectConfig: {
      name: "GetProjectConfig",
      I: GetProjectConfigRequest,
      O: GetProjectConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * InitFiles returns the init files to start off a project.
     *
     * @generated from rpc quary.service.v1.RustWithoutDatabaseService.InitFiles
     */
    initFiles: {
      name: "InitFiles",
      I: InitFilesRequest,
      O: InitFilesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListFiles returns the list of files in the project, bar ignored files.
     *
     * @generated from rpc quary.service.v1.RustWithoutDatabaseService.IsPathEmpty
     */
    isPathEmpty: {
      name: "IsPathEmpty",
      I: IsPathEmptyRequest,
      O: IsPathEmptyResponse,
      kind: MethodKind.Unary,
    },
    /**
     * StringifyProjectFile returns the stringified version of the given project file.
     *
     * @generated from rpc quary.service.v1.RustWithoutDatabaseService.StringifyProjectFile
     */
    stringifyProjectFile: {
      name: "StringifyProjectFile",
      I: StringifyProjectFileRequest,
      O: StringifyProjectFileResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GenerateProjectFiles generates the project files after onboarding. This includes the project file, and some other
     * ancillary files for set up like .gitignore, github actions, and some folders.
     *
     * @generated from rpc quary.service.v1.RustWithoutDatabaseService.GenerateProjectFiles
     */
    generateProjectFiles: {
      name: "GenerateProjectFiles",
      I: GenerateProjectFilesRequest,
      O: GenerateProjectFilesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateModelChartFile returns the yaml file for the chart for the given model with the given chart settings
     *
     * @generated from rpc quary.service.v1.RustWithoutDatabaseService.CreateModelChartFile
     */
    createModelChartFile: {
      name: "CreateModelChartFile",
      I: CreateModelChartFileRequest,
      O: CreateModelChartFileResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

/**
 * RustServiceWithDatabase is the service that is used and where the database is used and so passed in as a parameter in
 * the rpc calls
 *
 * @generated from service quary.service.v1.RustWithDatabaseService
 */
export const RustWithDatabaseService = {
  typeName: "quary.service.v1.RustWithDatabaseService",
  methods: {
    /**
     * ListAssets returns a list of model, seeds, sources & snapshots
     *
     * @generated from rpc quary.service.v1.RustWithDatabaseService.ListAssets
     */
    listAssets: {
      name: "ListAssets",
      I: ListAssetsRequest,
      O: ListAssetsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ParseProject returns the project for the given project file.
     *
     * @generated from rpc quary.service.v1.RustWithDatabaseService.ParseProject
     */
    parseProject: {
      name: "ParseProject",
      I: ParseProjectRequest,
      O: ParseProjectResponse,
      kind: MethodKind.Unary,
    },
    /**
     * RenderSchema renderSchema returns the sql to create the views for the seeds and the models but without any data
     *
     * @generated from rpc quary.service.v1.RustWithDatabaseService.RenderSchema
     */
    renderSchema: {
      name: "RenderSchema",
      I: RenderSchemaRequest,
      O: RenderSchemaResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ReturnDataForDocView returns the data for the doc view for the given asset. It also includes the dag and columns
     * and descriptions as well. At the moment it is a wrapper of ReturnFullSqlForAsset but we are moving towards making
     * the extension "dumber" and so this will be the only way to get the data for the doc view and more logic will move
     * WASM.
     *
     * @generated from rpc quary.service.v1.RustWithDatabaseService.ReturnDataForDocView
     */
    returnDataForDocView: {
      name: "ReturnDataForDocView",
      I: ReturnDataForDocViewRequest,
      O: ReturnDataForDocViewResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ReturnFullSqlForAsset returns the sql to create the view for the given asset. It also returns the dag and the
     * columns as well as the description for the asset.
     *
     * @generated from rpc quary.service.v1.RustWithDatabaseService.ReturnFullSqlForAsset
     */
    returnFullSqlForAsset: {
      name: "ReturnFullSqlForAsset",
      I: ReturnFullSqlForAssetRequest,
      O: ReturnFullSqlForAssetResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ReturnFullProjectDag returns the dag for the full project. Manually Excludes tests from the dag response.
     *
     * @generated from rpc quary.service.v1.RustWithDatabaseService.ReturnFullProjectDag
     */
    returnFullProjectDag: {
      name: "ReturnFullProjectDag",
      I: ReturnFullProjectDagRequest,
      O: ReturnFullProjectDagResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ReturnSQLForSeedsAndModels returns sql to create tables for the seeds and views for the models.
     *
     * @generated from rpc quary.service.v1.RustWithDatabaseService.ReturnSQLForSeedsAndModels
     */
    returnSQLForSeedsAndModels: {
      name: "ReturnSQLForSeedsAndModels",
      I: ReturnSQLForSeedsAndModelsRequest,
      O: ReturnSQLForSeedsAndModelsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ReturnSQLForInjectedModel returns the sql select statement that isn't part of the project yet but you want to
     * inject into the project to get the sql out for it.
     * TODO Implement caching
     *
     * @generated from rpc quary.service.v1.RustWithDatabaseService.ReturnSQLForInjectedModel
     */
    returnSQLForInjectedModel: {
      name: "ReturnSQLForInjectedModel",
      I: ReturnSQLForInjectedModelRequest,
      O: ReturnSQLForInjectedModelResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetModelTableDetails returns the details of the model table. It can also return details for a source.
     *
     * If there is no schema entry this returns an error.
     *
     * @generated from rpc quary.service.v1.RustWithDatabaseService.GetModelTable
     */
    getModelTable: {
      name: "GetModelTable",
      I: GetModelTableRequest,
      O: GetModelTableResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateModelSchemaEntry creates a schema entry for the given model. If the model already has a schema entry this returns nothing.
     * By default the schema entry is created with the name of the model and no description.
     * The schema is put inside the file schema.yaml in the same folder as the model's sql definition.
     *
     * @generated from rpc quary.service.v1.RustWithDatabaseService.CreateModelSchemaEntry
     */
    createModelSchemaEntry: {
      name: "CreateModelSchemaEntry",
      I: CreateModelSchemaEntryRequest,
      O: CreateModelSchemaEntryResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateAssetDescription updates the description for the given model, source or snapshot.
     * If the model or source cannot be found, UpdateAssetDescription essentially calls CreateModelSchemaEntry and
     * adds the description to the schema entry.
     *
     * @generated from rpc quary.service.v1.RustWithDatabaseService.UpdateAssetDescription
     */
    updateAssetDescription: {
      name: "UpdateAssetDescription",
      I: UpdateAssetDescriptionRequest,
      O: UpdateAssetDescriptionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * AddColumnToModelOrSource adds a column to the given model schema definition. If the column already exists, this
     * returns nothing.
     *
     * @generated from rpc quary.service.v1.RustWithDatabaseService.AddColumnToModelOrSource
     */
    addColumnToModelOrSource: {
      name: "AddColumnToModelOrSource",
      I: AddColumnToModelOrSourceRequest,
      O: AddColumnToModelOrSourceResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateModelOrSourceColumnDescription sets the description for the given column. If the column, model, source definition doesn't
     * exist, this calls AddColumnToModelOrSource and then adds the description.
     *
     * @generated from rpc quary.service.v1.RustWithDatabaseService.UpdateModelOrSourceColumnDescription
     */
    updateModelOrSourceColumnDescription: {
      name: "UpdateModelOrSourceColumnDescription",
      I: UpdateModelOrSourceColumnDescriptionRequest,
      O: UpdateModelOrSourceColumnDescriptionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * AddColumnTestToModelOrSourceColumn adds a column test to the given column. If the column test already exists, this
     * returns nothing. If no entry exists for the column, this creates it.
     *
     * @generated from rpc quary.service.v1.RustWithDatabaseService.AddColumnTestToModelOrSourceColumn
     */
    addColumnTestToModelOrSourceColumn: {
      name: "AddColumnTestToModelOrSourceColumn",
      I: AddColumnTestToModelOrSourceColumnRequest,
      O: AddColumnTestToModelOrSourceColumnResponse,
      kind: MethodKind.Unary,
    },
    /**
     * RemoveColumnTestFromModelOrSourceColumn removes a column test for a given column by finding a matching the full column test.
     * If the column test does not exist, this returns nothing. If an entry exists for the column, this removes it.
     *
     * @generated from rpc quary.service.v1.RustWithDatabaseService.RemoveColumnTestFromModelOrSourceColumn
     */
    removeColumnTestFromModelOrSourceColumn: {
      name: "RemoveColumnTestFromModelOrSourceColumn",
      I: RemoveColumnTestFromModelOrSourceColumnRequest,
      O: RemoveColumnTestFromModelOrSourceColumnResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GenerateSourceFiles generates the source files for the given project that have been selected in an import flow.
     *
     * @generated from rpc quary.service.v1.RustWithDatabaseService.GenerateSourceFiles
     */
    generateSourceFiles: {
      name: "GenerateSourceFiles",
      I: GenerateSourceFilesRequest,
      O: GenerateSourceFilesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ReturnDefinitionLocationsForSQL takes in a SQL statement, looks for the models it references and returns location of those
     * definitions in the file as well as the file path for the definition.
     *
     * @generated from rpc quary.service.v1.RustWithDatabaseService.ReturnDefinitionLocationsForSQL
     */
    returnDefinitionLocationsForSQL: {
      name: "ReturnDefinitionLocationsForSQL",
      I: ReturnDefinitionLocationsForSQLRequest,
      O: ReturnDefinitionLocationsForSQLResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

