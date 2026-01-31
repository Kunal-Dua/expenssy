import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Expenses
 *
 */
export type ExpensesModel = runtime.Types.Result.DefaultSelection<Prisma.$ExpensesPayload>;
export type AggregateExpenses = {
    _count: ExpensesCountAggregateOutputType | null;
    _avg: ExpensesAvgAggregateOutputType | null;
    _sum: ExpensesSumAggregateOutputType | null;
    _min: ExpensesMinAggregateOutputType | null;
    _max: ExpensesMaxAggregateOutputType | null;
};
export type ExpensesAvgAggregateOutputType = {
    amount: number | null;
};
export type ExpensesSumAggregateOutputType = {
    amount: number | null;
};
export type ExpensesMinAggregateOutputType = {
    id: string | null;
    expenseName: string | null;
    amount: number | null;
    expenseDescription: string | null;
    categoryId: string | null;
    categoryName: string | null;
    dateCreated: Date | null;
    dateUpdated: Date | null;
    userId: string | null;
};
export type ExpensesMaxAggregateOutputType = {
    id: string | null;
    expenseName: string | null;
    amount: number | null;
    expenseDescription: string | null;
    categoryId: string | null;
    categoryName: string | null;
    dateCreated: Date | null;
    dateUpdated: Date | null;
    userId: string | null;
};
export type ExpensesCountAggregateOutputType = {
    id: number;
    expenseName: number;
    amount: number;
    expenseDescription: number;
    categoryId: number;
    categoryName: number;
    dateCreated: number;
    dateUpdated: number;
    userId: number;
    _all: number;
};
export type ExpensesAvgAggregateInputType = {
    amount?: true;
};
export type ExpensesSumAggregateInputType = {
    amount?: true;
};
export type ExpensesMinAggregateInputType = {
    id?: true;
    expenseName?: true;
    amount?: true;
    expenseDescription?: true;
    categoryId?: true;
    categoryName?: true;
    dateCreated?: true;
    dateUpdated?: true;
    userId?: true;
};
export type ExpensesMaxAggregateInputType = {
    id?: true;
    expenseName?: true;
    amount?: true;
    expenseDescription?: true;
    categoryId?: true;
    categoryName?: true;
    dateCreated?: true;
    dateUpdated?: true;
    userId?: true;
};
export type ExpensesCountAggregateInputType = {
    id?: true;
    expenseName?: true;
    amount?: true;
    expenseDescription?: true;
    categoryId?: true;
    categoryName?: true;
    dateCreated?: true;
    dateUpdated?: true;
    userId?: true;
    _all?: true;
};
export type ExpensesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to aggregate.
     */
    where?: Prisma.ExpensesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Expenses to fetch.
     */
    orderBy?: Prisma.ExpensesOrderByWithRelationInput | Prisma.ExpensesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ExpensesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Expenses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Expenses
    **/
    _count?: true | ExpensesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ExpensesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ExpensesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ExpensesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ExpensesMaxAggregateInputType;
};
export type GetExpensesAggregateType<T extends ExpensesAggregateArgs> = {
    [P in keyof T & keyof AggregateExpenses]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExpenses[P]> : Prisma.GetScalarType<T[P], AggregateExpenses[P]>;
};
export type ExpensesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpensesWhereInput;
    orderBy?: Prisma.ExpensesOrderByWithAggregationInput | Prisma.ExpensesOrderByWithAggregationInput[];
    by: Prisma.ExpensesScalarFieldEnum[] | Prisma.ExpensesScalarFieldEnum;
    having?: Prisma.ExpensesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExpensesCountAggregateInputType | true;
    _avg?: ExpensesAvgAggregateInputType;
    _sum?: ExpensesSumAggregateInputType;
    _min?: ExpensesMinAggregateInputType;
    _max?: ExpensesMaxAggregateInputType;
};
export type ExpensesGroupByOutputType = {
    id: string;
    expenseName: string;
    amount: number;
    expenseDescription: string | null;
    categoryId: string;
    categoryName: string;
    dateCreated: Date;
    dateUpdated: Date;
    userId: string;
    _count: ExpensesCountAggregateOutputType | null;
    _avg: ExpensesAvgAggregateOutputType | null;
    _sum: ExpensesSumAggregateOutputType | null;
    _min: ExpensesMinAggregateOutputType | null;
    _max: ExpensesMaxAggregateOutputType | null;
};
type GetExpensesGroupByPayload<T extends ExpensesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ExpensesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ExpensesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ExpensesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ExpensesGroupByOutputType[P]>;
}>>;
export type ExpensesWhereInput = {
    AND?: Prisma.ExpensesWhereInput | Prisma.ExpensesWhereInput[];
    OR?: Prisma.ExpensesWhereInput[];
    NOT?: Prisma.ExpensesWhereInput | Prisma.ExpensesWhereInput[];
    id?: Prisma.StringFilter<"Expenses"> | string;
    expenseName?: Prisma.StringFilter<"Expenses"> | string;
    amount?: Prisma.FloatFilter<"Expenses"> | number;
    expenseDescription?: Prisma.StringNullableFilter<"Expenses"> | string | null;
    categoryId?: Prisma.StringFilter<"Expenses"> | string;
    categoryName?: Prisma.StringFilter<"Expenses"> | string;
    dateCreated?: Prisma.DateTimeFilter<"Expenses"> | Date | string;
    dateUpdated?: Prisma.DateTimeFilter<"Expenses"> | Date | string;
    userId?: Prisma.StringFilter<"Expenses"> | string;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ExpensesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    expenseName?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    expenseDescription?: Prisma.SortOrderInput | Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    categoryName?: Prisma.SortOrder;
    dateCreated?: Prisma.SortOrder;
    dateUpdated?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    category?: Prisma.CategoryOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type ExpensesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ExpensesWhereInput | Prisma.ExpensesWhereInput[];
    OR?: Prisma.ExpensesWhereInput[];
    NOT?: Prisma.ExpensesWhereInput | Prisma.ExpensesWhereInput[];
    expenseName?: Prisma.StringFilter<"Expenses"> | string;
    amount?: Prisma.FloatFilter<"Expenses"> | number;
    expenseDescription?: Prisma.StringNullableFilter<"Expenses"> | string | null;
    categoryId?: Prisma.StringFilter<"Expenses"> | string;
    categoryName?: Prisma.StringFilter<"Expenses"> | string;
    dateCreated?: Prisma.DateTimeFilter<"Expenses"> | Date | string;
    dateUpdated?: Prisma.DateTimeFilter<"Expenses"> | Date | string;
    userId?: Prisma.StringFilter<"Expenses"> | string;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type ExpensesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    expenseName?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    expenseDescription?: Prisma.SortOrderInput | Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    categoryName?: Prisma.SortOrder;
    dateCreated?: Prisma.SortOrder;
    dateUpdated?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.ExpensesCountOrderByAggregateInput;
    _avg?: Prisma.ExpensesAvgOrderByAggregateInput;
    _max?: Prisma.ExpensesMaxOrderByAggregateInput;
    _min?: Prisma.ExpensesMinOrderByAggregateInput;
    _sum?: Prisma.ExpensesSumOrderByAggregateInput;
};
export type ExpensesScalarWhereWithAggregatesInput = {
    AND?: Prisma.ExpensesScalarWhereWithAggregatesInput | Prisma.ExpensesScalarWhereWithAggregatesInput[];
    OR?: Prisma.ExpensesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ExpensesScalarWhereWithAggregatesInput | Prisma.ExpensesScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Expenses"> | string;
    expenseName?: Prisma.StringWithAggregatesFilter<"Expenses"> | string;
    amount?: Prisma.FloatWithAggregatesFilter<"Expenses"> | number;
    expenseDescription?: Prisma.StringNullableWithAggregatesFilter<"Expenses"> | string | null;
    categoryId?: Prisma.StringWithAggregatesFilter<"Expenses"> | string;
    categoryName?: Prisma.StringWithAggregatesFilter<"Expenses"> | string;
    dateCreated?: Prisma.DateTimeWithAggregatesFilter<"Expenses"> | Date | string;
    dateUpdated?: Prisma.DateTimeWithAggregatesFilter<"Expenses"> | Date | string;
    userId?: Prisma.StringWithAggregatesFilter<"Expenses"> | string;
};
export type ExpensesCreateInput = {
    id?: string;
    expenseName: string;
    amount: number;
    expenseDescription?: string | null;
    categoryName: string;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
    category: Prisma.CategoryCreateNestedOneWithoutExpensesInput;
    user: Prisma.UserCreateNestedOneWithoutExpensesInput;
};
export type ExpensesUncheckedCreateInput = {
    id?: string;
    expenseName: string;
    amount: number;
    expenseDescription?: string | null;
    categoryId: string;
    categoryName: string;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
    userId: string;
};
export type ExpensesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    expenseName?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    expenseDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneRequiredWithoutExpensesNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutExpensesNestedInput;
};
export type ExpensesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    expenseName?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    expenseDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ExpensesCreateManyInput = {
    id?: string;
    expenseName: string;
    amount: number;
    expenseDescription?: string | null;
    categoryId: string;
    categoryName: string;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
    userId: string;
};
export type ExpensesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    expenseName?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    expenseDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpensesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    expenseName?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    expenseDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ExpensesListRelationFilter = {
    every?: Prisma.ExpensesWhereInput;
    some?: Prisma.ExpensesWhereInput;
    none?: Prisma.ExpensesWhereInput;
};
export type ExpensesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ExpensesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    expenseName?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    expenseDescription?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    categoryName?: Prisma.SortOrder;
    dateCreated?: Prisma.SortOrder;
    dateUpdated?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type ExpensesAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type ExpensesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    expenseName?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    expenseDescription?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    categoryName?: Prisma.SortOrder;
    dateCreated?: Prisma.SortOrder;
    dateUpdated?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type ExpensesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    expenseName?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    expenseDescription?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    categoryName?: Prisma.SortOrder;
    dateCreated?: Prisma.SortOrder;
    dateUpdated?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type ExpensesSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type ExpensesCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ExpensesCreateWithoutUserInput, Prisma.ExpensesUncheckedCreateWithoutUserInput> | Prisma.ExpensesCreateWithoutUserInput[] | Prisma.ExpensesUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ExpensesCreateOrConnectWithoutUserInput | Prisma.ExpensesCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ExpensesCreateManyUserInputEnvelope;
    connect?: Prisma.ExpensesWhereUniqueInput | Prisma.ExpensesWhereUniqueInput[];
};
export type ExpensesUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ExpensesCreateWithoutUserInput, Prisma.ExpensesUncheckedCreateWithoutUserInput> | Prisma.ExpensesCreateWithoutUserInput[] | Prisma.ExpensesUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ExpensesCreateOrConnectWithoutUserInput | Prisma.ExpensesCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ExpensesCreateManyUserInputEnvelope;
    connect?: Prisma.ExpensesWhereUniqueInput | Prisma.ExpensesWhereUniqueInput[];
};
export type ExpensesUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ExpensesCreateWithoutUserInput, Prisma.ExpensesUncheckedCreateWithoutUserInput> | Prisma.ExpensesCreateWithoutUserInput[] | Prisma.ExpensesUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ExpensesCreateOrConnectWithoutUserInput | Prisma.ExpensesCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ExpensesUpsertWithWhereUniqueWithoutUserInput | Prisma.ExpensesUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ExpensesCreateManyUserInputEnvelope;
    set?: Prisma.ExpensesWhereUniqueInput | Prisma.ExpensesWhereUniqueInput[];
    disconnect?: Prisma.ExpensesWhereUniqueInput | Prisma.ExpensesWhereUniqueInput[];
    delete?: Prisma.ExpensesWhereUniqueInput | Prisma.ExpensesWhereUniqueInput[];
    connect?: Prisma.ExpensesWhereUniqueInput | Prisma.ExpensesWhereUniqueInput[];
    update?: Prisma.ExpensesUpdateWithWhereUniqueWithoutUserInput | Prisma.ExpensesUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ExpensesUpdateManyWithWhereWithoutUserInput | Prisma.ExpensesUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ExpensesScalarWhereInput | Prisma.ExpensesScalarWhereInput[];
};
export type ExpensesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ExpensesCreateWithoutUserInput, Prisma.ExpensesUncheckedCreateWithoutUserInput> | Prisma.ExpensesCreateWithoutUserInput[] | Prisma.ExpensesUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ExpensesCreateOrConnectWithoutUserInput | Prisma.ExpensesCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ExpensesUpsertWithWhereUniqueWithoutUserInput | Prisma.ExpensesUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ExpensesCreateManyUserInputEnvelope;
    set?: Prisma.ExpensesWhereUniqueInput | Prisma.ExpensesWhereUniqueInput[];
    disconnect?: Prisma.ExpensesWhereUniqueInput | Prisma.ExpensesWhereUniqueInput[];
    delete?: Prisma.ExpensesWhereUniqueInput | Prisma.ExpensesWhereUniqueInput[];
    connect?: Prisma.ExpensesWhereUniqueInput | Prisma.ExpensesWhereUniqueInput[];
    update?: Prisma.ExpensesUpdateWithWhereUniqueWithoutUserInput | Prisma.ExpensesUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ExpensesUpdateManyWithWhereWithoutUserInput | Prisma.ExpensesUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ExpensesScalarWhereInput | Prisma.ExpensesScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type ExpensesCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.ExpensesCreateWithoutCategoryInput, Prisma.ExpensesUncheckedCreateWithoutCategoryInput> | Prisma.ExpensesCreateWithoutCategoryInput[] | Prisma.ExpensesUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ExpensesCreateOrConnectWithoutCategoryInput | Prisma.ExpensesCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.ExpensesCreateManyCategoryInputEnvelope;
    connect?: Prisma.ExpensesWhereUniqueInput | Prisma.ExpensesWhereUniqueInput[];
};
export type ExpensesUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.ExpensesCreateWithoutCategoryInput, Prisma.ExpensesUncheckedCreateWithoutCategoryInput> | Prisma.ExpensesCreateWithoutCategoryInput[] | Prisma.ExpensesUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ExpensesCreateOrConnectWithoutCategoryInput | Prisma.ExpensesCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.ExpensesCreateManyCategoryInputEnvelope;
    connect?: Prisma.ExpensesWhereUniqueInput | Prisma.ExpensesWhereUniqueInput[];
};
export type ExpensesUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.ExpensesCreateWithoutCategoryInput, Prisma.ExpensesUncheckedCreateWithoutCategoryInput> | Prisma.ExpensesCreateWithoutCategoryInput[] | Prisma.ExpensesUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ExpensesCreateOrConnectWithoutCategoryInput | Prisma.ExpensesCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.ExpensesUpsertWithWhereUniqueWithoutCategoryInput | Prisma.ExpensesUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.ExpensesCreateManyCategoryInputEnvelope;
    set?: Prisma.ExpensesWhereUniqueInput | Prisma.ExpensesWhereUniqueInput[];
    disconnect?: Prisma.ExpensesWhereUniqueInput | Prisma.ExpensesWhereUniqueInput[];
    delete?: Prisma.ExpensesWhereUniqueInput | Prisma.ExpensesWhereUniqueInput[];
    connect?: Prisma.ExpensesWhereUniqueInput | Prisma.ExpensesWhereUniqueInput[];
    update?: Prisma.ExpensesUpdateWithWhereUniqueWithoutCategoryInput | Prisma.ExpensesUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.ExpensesUpdateManyWithWhereWithoutCategoryInput | Prisma.ExpensesUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.ExpensesScalarWhereInput | Prisma.ExpensesScalarWhereInput[];
};
export type ExpensesUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.ExpensesCreateWithoutCategoryInput, Prisma.ExpensesUncheckedCreateWithoutCategoryInput> | Prisma.ExpensesCreateWithoutCategoryInput[] | Prisma.ExpensesUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ExpensesCreateOrConnectWithoutCategoryInput | Prisma.ExpensesCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.ExpensesUpsertWithWhereUniqueWithoutCategoryInput | Prisma.ExpensesUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.ExpensesCreateManyCategoryInputEnvelope;
    set?: Prisma.ExpensesWhereUniqueInput | Prisma.ExpensesWhereUniqueInput[];
    disconnect?: Prisma.ExpensesWhereUniqueInput | Prisma.ExpensesWhereUniqueInput[];
    delete?: Prisma.ExpensesWhereUniqueInput | Prisma.ExpensesWhereUniqueInput[];
    connect?: Prisma.ExpensesWhereUniqueInput | Prisma.ExpensesWhereUniqueInput[];
    update?: Prisma.ExpensesUpdateWithWhereUniqueWithoutCategoryInput | Prisma.ExpensesUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.ExpensesUpdateManyWithWhereWithoutCategoryInput | Prisma.ExpensesUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.ExpensesScalarWhereInput | Prisma.ExpensesScalarWhereInput[];
};
export type ExpensesCreateWithoutUserInput = {
    id?: string;
    expenseName: string;
    amount: number;
    expenseDescription?: string | null;
    categoryName: string;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
    category: Prisma.CategoryCreateNestedOneWithoutExpensesInput;
};
export type ExpensesUncheckedCreateWithoutUserInput = {
    id?: string;
    expenseName: string;
    amount: number;
    expenseDescription?: string | null;
    categoryId: string;
    categoryName: string;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
};
export type ExpensesCreateOrConnectWithoutUserInput = {
    where: Prisma.ExpensesWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpensesCreateWithoutUserInput, Prisma.ExpensesUncheckedCreateWithoutUserInput>;
};
export type ExpensesCreateManyUserInputEnvelope = {
    data: Prisma.ExpensesCreateManyUserInput | Prisma.ExpensesCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ExpensesUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ExpensesWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExpensesUpdateWithoutUserInput, Prisma.ExpensesUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ExpensesCreateWithoutUserInput, Prisma.ExpensesUncheckedCreateWithoutUserInput>;
};
export type ExpensesUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ExpensesWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExpensesUpdateWithoutUserInput, Prisma.ExpensesUncheckedUpdateWithoutUserInput>;
};
export type ExpensesUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ExpensesScalarWhereInput;
    data: Prisma.XOR<Prisma.ExpensesUpdateManyMutationInput, Prisma.ExpensesUncheckedUpdateManyWithoutUserInput>;
};
export type ExpensesScalarWhereInput = {
    AND?: Prisma.ExpensesScalarWhereInput | Prisma.ExpensesScalarWhereInput[];
    OR?: Prisma.ExpensesScalarWhereInput[];
    NOT?: Prisma.ExpensesScalarWhereInput | Prisma.ExpensesScalarWhereInput[];
    id?: Prisma.StringFilter<"Expenses"> | string;
    expenseName?: Prisma.StringFilter<"Expenses"> | string;
    amount?: Prisma.FloatFilter<"Expenses"> | number;
    expenseDescription?: Prisma.StringNullableFilter<"Expenses"> | string | null;
    categoryId?: Prisma.StringFilter<"Expenses"> | string;
    categoryName?: Prisma.StringFilter<"Expenses"> | string;
    dateCreated?: Prisma.DateTimeFilter<"Expenses"> | Date | string;
    dateUpdated?: Prisma.DateTimeFilter<"Expenses"> | Date | string;
    userId?: Prisma.StringFilter<"Expenses"> | string;
};
export type ExpensesCreateWithoutCategoryInput = {
    id?: string;
    expenseName: string;
    amount: number;
    expenseDescription?: string | null;
    categoryName: string;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutExpensesInput;
};
export type ExpensesUncheckedCreateWithoutCategoryInput = {
    id?: string;
    expenseName: string;
    amount: number;
    expenseDescription?: string | null;
    categoryName: string;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
    userId: string;
};
export type ExpensesCreateOrConnectWithoutCategoryInput = {
    where: Prisma.ExpensesWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpensesCreateWithoutCategoryInput, Prisma.ExpensesUncheckedCreateWithoutCategoryInput>;
};
export type ExpensesCreateManyCategoryInputEnvelope = {
    data: Prisma.ExpensesCreateManyCategoryInput | Prisma.ExpensesCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type ExpensesUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.ExpensesWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExpensesUpdateWithoutCategoryInput, Prisma.ExpensesUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.ExpensesCreateWithoutCategoryInput, Prisma.ExpensesUncheckedCreateWithoutCategoryInput>;
};
export type ExpensesUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.ExpensesWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExpensesUpdateWithoutCategoryInput, Prisma.ExpensesUncheckedUpdateWithoutCategoryInput>;
};
export type ExpensesUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.ExpensesScalarWhereInput;
    data: Prisma.XOR<Prisma.ExpensesUpdateManyMutationInput, Prisma.ExpensesUncheckedUpdateManyWithoutCategoryInput>;
};
export type ExpensesCreateManyUserInput = {
    id?: string;
    expenseName: string;
    amount: number;
    expenseDescription?: string | null;
    categoryId: string;
    categoryName: string;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
};
export type ExpensesUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    expenseName?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    expenseDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneRequiredWithoutExpensesNestedInput;
};
export type ExpensesUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    expenseName?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    expenseDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpensesUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    expenseName?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    expenseDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpensesCreateManyCategoryInput = {
    id?: string;
    expenseName: string;
    amount: number;
    expenseDescription?: string | null;
    categoryName: string;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
    userId: string;
};
export type ExpensesUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    expenseName?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    expenseDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutExpensesNestedInput;
};
export type ExpensesUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    expenseName?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    expenseDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ExpensesUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    expenseName?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    expenseDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ExpensesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    expenseName?: boolean;
    amount?: boolean;
    expenseDescription?: boolean;
    categoryId?: boolean;
    categoryName?: boolean;
    dateCreated?: boolean;
    dateUpdated?: boolean;
    userId?: boolean;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expenses"]>;
export type ExpensesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    expenseName?: boolean;
    amount?: boolean;
    expenseDescription?: boolean;
    categoryId?: boolean;
    categoryName?: boolean;
    dateCreated?: boolean;
    dateUpdated?: boolean;
    userId?: boolean;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expenses"]>;
export type ExpensesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    expenseName?: boolean;
    amount?: boolean;
    expenseDescription?: boolean;
    categoryId?: boolean;
    categoryName?: boolean;
    dateCreated?: boolean;
    dateUpdated?: boolean;
    userId?: boolean;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expenses"]>;
export type ExpensesSelectScalar = {
    id?: boolean;
    expenseName?: boolean;
    amount?: boolean;
    expenseDescription?: boolean;
    categoryId?: boolean;
    categoryName?: boolean;
    dateCreated?: boolean;
    dateUpdated?: boolean;
    userId?: boolean;
};
export type ExpensesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "expenseName" | "amount" | "expenseDescription" | "categoryId" | "categoryName" | "dateCreated" | "dateUpdated" | "userId", ExtArgs["result"]["expenses"]>;
export type ExpensesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ExpensesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ExpensesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ExpensesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Expenses";
    objects: {
        category: Prisma.$CategoryPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        expenseName: string;
        amount: number;
        expenseDescription: string | null;
        categoryId: string;
        categoryName: string;
        dateCreated: Date;
        dateUpdated: Date;
        userId: string;
    }, ExtArgs["result"]["expenses"]>;
    composites: {};
};
export type ExpensesGetPayload<S extends boolean | null | undefined | ExpensesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ExpensesPayload, S>;
export type ExpensesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ExpensesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ExpensesCountAggregateInputType | true;
};
export interface ExpensesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Expenses'];
        meta: {
            name: 'Expenses';
        };
    };
    /**
     * Find zero or one Expenses that matches the filter.
     * @param {ExpensesFindUniqueArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpensesFindUniqueArgs>(args: Prisma.SelectSubset<T, ExpensesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ExpensesClient<runtime.Types.Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Expenses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpensesFindUniqueOrThrowArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpensesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ExpensesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExpensesClient<runtime.Types.Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesFindFirstArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpensesFindFirstArgs>(args?: Prisma.SelectSubset<T, ExpensesFindFirstArgs<ExtArgs>>): Prisma.Prisma__ExpensesClient<runtime.Types.Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Expenses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesFindFirstOrThrowArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpensesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ExpensesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExpensesClient<runtime.Types.Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expenses.findMany()
     *
     * // Get first 10 Expenses
     * const expenses = await prisma.expenses.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const expensesWithIdOnly = await prisma.expenses.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ExpensesFindManyArgs>(args?: Prisma.SelectSubset<T, ExpensesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Expenses.
     * @param {ExpensesCreateArgs} args - Arguments to create a Expenses.
     * @example
     * // Create one Expenses
     * const Expenses = await prisma.expenses.create({
     *   data: {
     *     // ... data to create a Expenses
     *   }
     * })
     *
     */
    create<T extends ExpensesCreateArgs>(args: Prisma.SelectSubset<T, ExpensesCreateArgs<ExtArgs>>): Prisma.Prisma__ExpensesClient<runtime.Types.Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Expenses.
     * @param {ExpensesCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expenses = await prisma.expenses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ExpensesCreateManyArgs>(args?: Prisma.SelectSubset<T, ExpensesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpensesCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expenses = await prisma.expenses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Expenses and only return the `id`
     * const expensesWithIdOnly = await prisma.expenses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ExpensesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ExpensesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Expenses.
     * @param {ExpensesDeleteArgs} args - Arguments to delete one Expenses.
     * @example
     * // Delete one Expenses
     * const Expenses = await prisma.expenses.delete({
     *   where: {
     *     // ... filter to delete one Expenses
     *   }
     * })
     *
     */
    delete<T extends ExpensesDeleteArgs>(args: Prisma.SelectSubset<T, ExpensesDeleteArgs<ExtArgs>>): Prisma.Prisma__ExpensesClient<runtime.Types.Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Expenses.
     * @param {ExpensesUpdateArgs} args - Arguments to update one Expenses.
     * @example
     * // Update one Expenses
     * const expenses = await prisma.expenses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ExpensesUpdateArgs>(args: Prisma.SelectSubset<T, ExpensesUpdateArgs<ExtArgs>>): Prisma.Prisma__ExpensesClient<runtime.Types.Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Expenses.
     * @param {ExpensesDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expenses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ExpensesDeleteManyArgs>(args?: Prisma.SelectSubset<T, ExpensesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expenses = await prisma.expenses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ExpensesUpdateManyArgs>(args: Prisma.SelectSubset<T, ExpensesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {ExpensesUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expenses = await prisma.expenses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Expenses and only return the `id`
     * const expensesWithIdOnly = await prisma.expenses.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ExpensesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ExpensesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Expenses.
     * @param {ExpensesUpsertArgs} args - Arguments to update or create a Expenses.
     * @example
     * // Update or create a Expenses
     * const expenses = await prisma.expenses.upsert({
     *   create: {
     *     // ... data to create a Expenses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expenses we want to update
     *   }
     * })
     */
    upsert<T extends ExpensesUpsertArgs>(args: Prisma.SelectSubset<T, ExpensesUpsertArgs<ExtArgs>>): Prisma.Prisma__ExpensesClient<runtime.Types.Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expenses.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpensesCountArgs>(args?: Prisma.Subset<T, ExpensesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ExpensesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpensesAggregateArgs>(args: Prisma.Subset<T, ExpensesAggregateArgs>): Prisma.PrismaPromise<GetExpensesAggregateType<T>>;
    /**
     * Group by Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends ExpensesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ExpensesGroupByArgs['orderBy'];
    } : {
        orderBy?: ExpensesGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ExpensesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpensesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Expenses model
     */
    readonly fields: ExpensesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Expenses.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ExpensesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    category<T extends Prisma.CategoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoryDefaultArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Expenses model
 */
export interface ExpensesFieldRefs {
    readonly id: Prisma.FieldRef<"Expenses", 'String'>;
    readonly expenseName: Prisma.FieldRef<"Expenses", 'String'>;
    readonly amount: Prisma.FieldRef<"Expenses", 'Float'>;
    readonly expenseDescription: Prisma.FieldRef<"Expenses", 'String'>;
    readonly categoryId: Prisma.FieldRef<"Expenses", 'String'>;
    readonly categoryName: Prisma.FieldRef<"Expenses", 'String'>;
    readonly dateCreated: Prisma.FieldRef<"Expenses", 'DateTime'>;
    readonly dateUpdated: Prisma.FieldRef<"Expenses", 'DateTime'>;
    readonly userId: Prisma.FieldRef<"Expenses", 'String'>;
}
/**
 * Expenses findUnique
 */
export type ExpensesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: Prisma.ExpensesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Expenses
     */
    omit?: Prisma.ExpensesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExpensesInclude<ExtArgs> | null;
    /**
     * Filter, which Expenses to fetch.
     */
    where: Prisma.ExpensesWhereUniqueInput;
};
/**
 * Expenses findUniqueOrThrow
 */
export type ExpensesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: Prisma.ExpensesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Expenses
     */
    omit?: Prisma.ExpensesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExpensesInclude<ExtArgs> | null;
    /**
     * Filter, which Expenses to fetch.
     */
    where: Prisma.ExpensesWhereUniqueInput;
};
/**
 * Expenses findFirst
 */
export type ExpensesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: Prisma.ExpensesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Expenses
     */
    omit?: Prisma.ExpensesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExpensesInclude<ExtArgs> | null;
    /**
     * Filter, which Expenses to fetch.
     */
    where?: Prisma.ExpensesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Expenses to fetch.
     */
    orderBy?: Prisma.ExpensesOrderByWithRelationInput | Prisma.ExpensesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Expenses.
     */
    cursor?: Prisma.ExpensesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Expenses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Expenses.
     */
    distinct?: Prisma.ExpensesScalarFieldEnum | Prisma.ExpensesScalarFieldEnum[];
};
/**
 * Expenses findFirstOrThrow
 */
export type ExpensesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: Prisma.ExpensesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Expenses
     */
    omit?: Prisma.ExpensesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExpensesInclude<ExtArgs> | null;
    /**
     * Filter, which Expenses to fetch.
     */
    where?: Prisma.ExpensesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Expenses to fetch.
     */
    orderBy?: Prisma.ExpensesOrderByWithRelationInput | Prisma.ExpensesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Expenses.
     */
    cursor?: Prisma.ExpensesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Expenses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Expenses.
     */
    distinct?: Prisma.ExpensesScalarFieldEnum | Prisma.ExpensesScalarFieldEnum[];
};
/**
 * Expenses findMany
 */
export type ExpensesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: Prisma.ExpensesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Expenses
     */
    omit?: Prisma.ExpensesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExpensesInclude<ExtArgs> | null;
    /**
     * Filter, which Expenses to fetch.
     */
    where?: Prisma.ExpensesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Expenses to fetch.
     */
    orderBy?: Prisma.ExpensesOrderByWithRelationInput | Prisma.ExpensesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Expenses.
     */
    cursor?: Prisma.ExpensesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Expenses.
     */
    skip?: number;
    distinct?: Prisma.ExpensesScalarFieldEnum | Prisma.ExpensesScalarFieldEnum[];
};
/**
 * Expenses create
 */
export type ExpensesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: Prisma.ExpensesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Expenses
     */
    omit?: Prisma.ExpensesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExpensesInclude<ExtArgs> | null;
    /**
     * The data needed to create a Expenses.
     */
    data: Prisma.XOR<Prisma.ExpensesCreateInput, Prisma.ExpensesUncheckedCreateInput>;
};
/**
 * Expenses createMany
 */
export type ExpensesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: Prisma.ExpensesCreateManyInput | Prisma.ExpensesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Expenses createManyAndReturn
 */
export type ExpensesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: Prisma.ExpensesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Expenses
     */
    omit?: Prisma.ExpensesOmit<ExtArgs> | null;
    /**
     * The data used to create many Expenses.
     */
    data: Prisma.ExpensesCreateManyInput | Prisma.ExpensesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExpensesIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Expenses update
 */
export type ExpensesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: Prisma.ExpensesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Expenses
     */
    omit?: Prisma.ExpensesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExpensesInclude<ExtArgs> | null;
    /**
     * The data needed to update a Expenses.
     */
    data: Prisma.XOR<Prisma.ExpensesUpdateInput, Prisma.ExpensesUncheckedUpdateInput>;
    /**
     * Choose, which Expenses to update.
     */
    where: Prisma.ExpensesWhereUniqueInput;
};
/**
 * Expenses updateMany
 */
export type ExpensesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: Prisma.XOR<Prisma.ExpensesUpdateManyMutationInput, Prisma.ExpensesUncheckedUpdateManyInput>;
    /**
     * Filter which Expenses to update
     */
    where?: Prisma.ExpensesWhereInput;
    /**
     * Limit how many Expenses to update.
     */
    limit?: number;
};
/**
 * Expenses updateManyAndReturn
 */
export type ExpensesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: Prisma.ExpensesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Expenses
     */
    omit?: Prisma.ExpensesOmit<ExtArgs> | null;
    /**
     * The data used to update Expenses.
     */
    data: Prisma.XOR<Prisma.ExpensesUpdateManyMutationInput, Prisma.ExpensesUncheckedUpdateManyInput>;
    /**
     * Filter which Expenses to update
     */
    where?: Prisma.ExpensesWhereInput;
    /**
     * Limit how many Expenses to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExpensesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Expenses upsert
 */
export type ExpensesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: Prisma.ExpensesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Expenses
     */
    omit?: Prisma.ExpensesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExpensesInclude<ExtArgs> | null;
    /**
     * The filter to search for the Expenses to update in case it exists.
     */
    where: Prisma.ExpensesWhereUniqueInput;
    /**
     * In case the Expenses found by the `where` argument doesn't exist, create a new Expenses with this data.
     */
    create: Prisma.XOR<Prisma.ExpensesCreateInput, Prisma.ExpensesUncheckedCreateInput>;
    /**
     * In case the Expenses was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ExpensesUpdateInput, Prisma.ExpensesUncheckedUpdateInput>;
};
/**
 * Expenses delete
 */
export type ExpensesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: Prisma.ExpensesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Expenses
     */
    omit?: Prisma.ExpensesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExpensesInclude<ExtArgs> | null;
    /**
     * Filter which Expenses to delete.
     */
    where: Prisma.ExpensesWhereUniqueInput;
};
/**
 * Expenses deleteMany
 */
export type ExpensesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: Prisma.ExpensesWhereInput;
    /**
     * Limit how many Expenses to delete.
     */
    limit?: number;
};
/**
 * Expenses without action
 */
export type ExpensesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: Prisma.ExpensesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Expenses
     */
    omit?: Prisma.ExpensesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExpensesInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Expenses.d.ts.map