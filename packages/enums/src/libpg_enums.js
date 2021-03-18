module.exports = {
  'nodes/parsenodes': {
    OverridingKind: {
      values: [
        {
          comment: ''
        },
        {
          name: 'OVERRIDING_NOT_SET',
          comment: null
        },
        {
          name: 'OVERRIDING_USER_VALUE',
          comment: null
        },
        {
          name: 'OVERRIDING_SYSTEM_VALUE',
          comment: null
        }
      ],
      comment:
        '/*-------------------------------------------------------------------------\n *\n * parsenodes.h\n *\t  definitions for parse tree nodes\n *\n * Many of the node types used in parsetrees include a "location" field.\n * This is a byte (not character) offset in the original source text, to be\n * used for positioning an error cursor when there is an error related to\n * the node.  Access to the original source text is needed to make use of\n * the location.  At the topmost (statement) level, we also provide a\n * statement length, likewise measured in bytes, for convenience in\n * identifying statement boundaries in multi-statement source strings.\n *\n *\n * Portions Copyright (c) 1996-2017, PostgreSQL Global Development Group\n * Portions Copyright (c) 1994, Regents of the University of California\n *\n * src/include/nodes/parsenodes.h\n *\n *-------------------------------------------------------------------------\n */\n'
    },
    QuerySource: {
      values: [
        {
          comment: ''
        },
        {
          name: 'QSRC_ORIGINAL',
          comment: '/* original parsetree (explicit query) */'
        },
        {
          name: 'QSRC_PARSER',
          comment: '/* added by parse analysis (now unused) */'
        },
        {
          name: 'QSRC_INSTEAD_RULE',
          comment: '/* added by unconditional INSTEAD rule */'
        },
        {
          name: 'QSRC_QUAL_INSTEAD_RULE',
          comment: '/* added by conditional INSTEAD rule */'
        },
        {
          name: 'QSRC_NON_INSTEAD_RULE',
          comment: '/* added by non-INSTEAD rule */'
        }
      ],
      comment: '/* Possible sources of a Query */\n'
    },
    SortByDir: {
      values: [
        {
          comment: ''
        },
        {
          name: 'SORTBY_DEFAULT',
          comment: null
        },
        {
          name: 'SORTBY_ASC',
          comment: null
        },
        {
          name: 'SORTBY_DESC',
          comment: null
        },
        {
          name: 'SORTBY_USING',
          comment: '/* not allowed in CREATE INDEX ... */'
        }
      ],
      comment: '/* Sort ordering options for ORDER BY and CREATE INDEX */\n'
    },
    SortByNulls: {
      values: [
        {
          comment: ''
        },
        {
          name: 'SORTBY_NULLS_DEFAULT',
          comment: null
        },
        {
          name: 'SORTBY_NULLS_FIRST',
          comment: null
        },
        {
          name: 'SORTBY_NULLS_LAST',
          comment: null
        }
      ],
      comment: null
    },
    A_Expr_Kind: {
      values: [
        {
          comment: ''
        },
        {
          name: 'AEXPR_OP',
          comment: '/* normal operator */'
        },
        {
          name: 'AEXPR_OP_ANY',
          comment: '/* scalar op ANY (array) */'
        },
        {
          name: 'AEXPR_OP_ALL',
          comment: '/* scalar op ALL (array) */'
        },
        {
          name: 'AEXPR_DISTINCT',
          comment: '/* IS DISTINCT FROM - name must be "=" */'
        },
        {
          name: 'AEXPR_NOT_DISTINCT',
          comment: '/* IS NOT DISTINCT FROM - name must be "=" */'
        },
        {
          name: 'AEXPR_NULLIF',
          comment: '/* NULLIF - name must be "=" */'
        },
        {
          name: 'AEXPR_OF',
          comment: '/* IS [NOT] OF - name must be "=" or "<>" */'
        },
        {
          name: 'AEXPR_IN',
          comment: '/* [NOT] IN - name must be "=" or "<>" */'
        },
        {
          name: 'AEXPR_LIKE',
          comment: '/* [NOT] LIKE - name must be "~~" or "!~~" */'
        },
        {
          name: 'AEXPR_ILIKE',
          comment: '/* [NOT] ILIKE - name must be "~~*" or "!~~*" */'
        },
        {
          name: 'AEXPR_SIMILAR',
          comment: '/* [NOT] SIMILAR - name must be "~" or "!~" */'
        },
        {
          name: 'AEXPR_BETWEEN',
          comment: '/* name must be "BETWEEN" */'
        },
        {
          name: 'AEXPR_NOT_BETWEEN',
          comment: '/* name must be "NOT BETWEEN" */'
        },
        {
          name: 'AEXPR_BETWEEN_SYM',
          comment: '/* name must be "BETWEEN SYMMETRIC" */'
        },
        {
          name: 'AEXPR_NOT_BETWEEN_SYM',
          comment: '/* name must be "NOT BETWEEN SYMMETRIC" */'
        },
        {
          name: 'AEXPR_PAREN',
          comment: '/* nameless dummy node for parentheses */'
        }
      ],
      comment: '/*\n * A_Expr - infix, prefix, and postfix expressions\n */\n'
    },
    RoleSpecType: {
      values: [
        {
          comment: ''
        },
        {
          name: 'ROLESPEC_CSTRING',
          comment: '/* role name is stored as a C string */'
        },
        {
          name: 'ROLESPEC_CURRENT_USER',
          comment: '/* role spec is CURRENT_USER */'
        },
        {
          name: 'ROLESPEC_SESSION_USER',
          comment: '/* role spec is SESSION_USER */'
        },
        {
          name: 'ROLESPEC_PUBLIC',
          comment: '/* role name is "public" */'
        }
      ],
      comment:
        '/*\n * RoleSpec - a role name or one of a few special values.\n */\n'
    },
    TableLikeOption: {
      values: [
        {
          comment: ''
        },
        {
          name: 'CREATE_TABLE_LIKE_DEFAULTS',
          comment: null
        },
        {
          name: 'CREATE_TABLE_LIKE_CONSTRAINTS',
          comment: null
        },
        {
          name: 'CREATE_TABLE_LIKE_IDENTITY',
          comment: null
        },
        {
          name: 'CREATE_TABLE_LIKE_INDEXES',
          comment: null
        },
        {
          name: 'CREATE_TABLE_LIKE_STORAGE',
          comment: null
        },
        {
          name: 'CREATE_TABLE_LIKE_COMMENTS',
          comment: null
        },
        {
          name: 'CREATE_TABLE_LIKE_ALL',
          comment: null
        }
      ],
      comment: null
    },
    DefElemAction: {
      values: [
        {
          comment: ''
        },
        {
          name: 'DEFELEM_UNSPEC',
          comment: '/* no action given */'
        },
        {
          name: 'DEFELEM_SET',
          comment: null
        },
        {
          name: 'DEFELEM_ADD',
          comment: null
        },
        {
          name: 'DEFELEM_DROP',
          comment: null
        }
      ],
      comment:
        '/*\n * DefElem - a generic "name = value" option definition\n *\n * In some contexts the name can be qualified.  Also, certain SQL commands\n * allow a SET/ADD/DROP action to be attached to option settings, so it\'s\n * convenient to carry a field for that too.  (Note: currently, it is our\n * practice that the grammar allows namespace and action only in statements\n * where they are relevant; C code can just ignore those fields in other\n * statements.)\n */\n'
    },
    PartitionRangeDatumKind: {
      values: [
        {
          comment: ''
        },
        {
          name: 'PARTITION_RANGE_DATUM_MINVALUE',
          comment: null
        },
        {
          name: 'PARTITION_RANGE_DATUM_VALUE',
          comment: null
        },
        {
          name: 'PARTITION_RANGE_DATUM_MAXVALUE',
          comment: null
        }
      ],
      comment:
        '/*\n * PartitionRangeDatum - one of the values in a range partition bound\n *\n * This can be MINVALUE, MAXVALUE or a specific bounded value.\n */\n'
    },
    RTEKind: {
      values: [
        {
          comment: ''
        },
        {
          name: 'RTE_RELATION',
          comment: '/* ordinary relation reference */'
        },
        {
          name: 'RTE_SUBQUERY',
          comment: '/* subquery in FROM */'
        },
        {
          name: 'RTE_JOIN',
          comment: '/* join */'
        },
        {
          name: 'RTE_FUNCTION',
          comment: '/* function in FROM */'
        },
        {
          name: 'RTE_TABLEFUNC',
          comment: '/* TableFunc(.., column list) */'
        },
        {
          name: 'RTE_VALUES',
          comment: '/* VALUES (<exprlist>), (<exprlist>), ... */'
        },
        {
          name: 'RTE_CTE',
          comment: '/* common table expr (WITH list element) */'
        },
        {
          name: 'RTE_NAMEDTUPLESTORE',
          comment: '/* tuplestore, e.g. for AFTER triggers */'
        }
      ],
      comment:
        "/*--------------------\n * RangeTblEntry -\n *\t  A range table is a List of RangeTblEntry nodes.\n *\n *\t  A range table entry may represent a plain relation, a sub-select in\n *\t  FROM, or the result of a JOIN clause.  (Only explicit JOIN syntax\n *\t  produces an RTE, not the implicit join resulting from multiple FROM\n *\t  items.  This is because we only need the RTE to deal with SQL features\n *\t  like outer joins and join-output-column aliasing.)  Other special\n *\t  RTE types also exist, as indicated by RTEKind.\n *\n *\t  Note that we consider RTE_RELATION to cover anything that has a pg_class\n *\t  entry.  relkind distinguishes the sub-cases.\n *\n *\t  alias is an Alias node representing the AS alias-clause attached to the\n *\t  FROM expression, or NULL if no clause.\n *\n *\t  eref is the table reference name and column reference names (either\n *\t  real or aliases).  Note that system columns (OID etc) are not included\n *\t  in the column list.\n *\t  eref->aliasname is required to be present, and should generally be used\n *\t  to identify the RTE for error messages etc.\n *\n *\t  In RELATION RTEs, the colnames in both alias and eref are indexed by\n *\t  physical attribute number; this means there must be colname entries for\n *\t  dropped columns.  When building an RTE we insert empty strings (\"\") for\n *\t  dropped columns.  Note however that a stored rule may have nonempty\n *\t  colnames for columns dropped since the rule was created (and for that\n *\t  matter the colnames might be out of date due to column renamings).\n *\t  The same comments apply to FUNCTION RTEs when a function's return type\n *\t  is a named composite type.\n *\n *\t  In JOIN RTEs, the colnames in both alias and eref are one-to-one with\n *\t  joinaliasvars entries.  A JOIN RTE will omit columns of its inputs when\n *\t  those columns are known to be dropped at parse time.  Again, however,\n *\t  a stored rule might contain entries for columns dropped since the rule\n *\t  was created.  (This is only possible for columns not actually referenced\n *\t  in the rule.)  When loading a stored rule, we replace the joinaliasvars\n *\t  items for any such columns with null pointers.  (We can't simply delete\n *\t  them from the joinaliasvars list, because that would affect the attnums\n *\t  of Vars referencing the rest of the list.)\n *\n *\t  inh is TRUE for relation references that should be expanded to include\n *\t  inheritance children, if the rel has any.  This *must* be FALSE for\n *\t  RTEs other than RTE_RELATION entries.\n *\n *\t  inFromCl marks those range variables that are listed in the FROM clause.\n *\t  It's false for RTEs that are added to a query behind the scenes, such\n *\t  as the NEW and OLD variables for a rule, or the subqueries of a UNION.\n *\t  This flag is not used anymore during parsing, since the parser now uses\n *\t  a separate \"namespace\" data structure to control visibility, but it is\n *\t  needed by ruleutils.c to determine whether RTEs should be shown in\n *\t  decompiled queries.\n *\n *\t  requiredPerms and checkAsUser specify run-time access permissions\n *\t  checks to be performed at query startup.  The user must have *all*\n *\t  of the permissions that are OR'd together in requiredPerms (zero\n *\t  indicates no permissions checking).  If checkAsUser is not zero,\n *\t  then do the permissions checks using the access rights of that user,\n *\t  not the current effective user ID.  (This allows rules to act as\n *\t  setuid gateways.)  Permissions checks only apply to RELATION RTEs.\n *\n *\t  For SELECT/INSERT/UPDATE permissions, if the user doesn't have\n *\t  table-wide permissions then it is sufficient to have the permissions\n *\t  on all columns identified in selectedCols (for SELECT) and/or\n *\t  insertedCols and/or updatedCols (INSERT with ON CONFLICT DO UPDATE may\n *\t  have all 3).  selectedCols, insertedCols and updatedCols are bitmapsets,\n *\t  which cannot have negative integer members, so we subtract\n *\t  FirstLowInvalidHeapAttributeNumber from column numbers before storing\n *\t  them in these fields.  A whole-row Var reference is represented by\n *\t  setting the bit for InvalidAttrNumber.\n *\n *\t  securityQuals is a list of security barrier quals (boolean expressions),\n *\t  to be tested in the listed order before returning a row from the\n *\t  relation.  It is always NIL in parser output.  Entries are added by the\n *\t  rewriter to implement security-barrier views and/or row-level security.\n *\t  Note that the planner turns each boolean expression into an implicitly\n *\t  AND'ed sublist, as is its usual habit with qualification expressions.\n *--------------------\n */\n"
    },
    WCOKind: {
      values: [
        {
          comment: ''
        },
        {
          name: 'WCO_VIEW_CHECK',
          comment: '/* WCO on an auto-updatable view */'
        },
        {
          name: 'WCO_RLS_INSERT_CHECK',
          comment: '/* RLS INSERT WITH CHECK policy */'
        },
        {
          name: 'WCO_RLS_UPDATE_CHECK',
          comment: '/* RLS UPDATE WITH CHECK policy */'
        },
        {
          name: 'WCO_RLS_CONFLICT_CHECK',
          comment: '/* RLS ON CONFLICT DO UPDATE USING policy */'
        }
      ],
      comment:
        '/*\n * WithCheckOption -\n *\t\trepresentation of WITH CHECK OPTION checks to be applied to new tuples\n *\t\twhen inserting/updating an auto-updatable view, or RLS WITH CHECK\n *\t\tpolicies to be applied when inserting/updating a relation with RLS.\n */\n'
    },
    GroupingSetKind: {
      values: [
        {
          comment: ''
        },
        {
          name: 'GROUPING_SET_EMPTY',
          comment: null
        },
        {
          name: 'GROUPING_SET_SIMPLE',
          comment: null
        },
        {
          name: 'GROUPING_SET_ROLLUP',
          comment: null
        },
        {
          name: 'GROUPING_SET_CUBE',
          comment: null
        },
        {
          name: 'GROUPING_SET_SETS',
          comment: null
        }
      ],
      comment:
        "/*\n * GroupingSet -\n *\t\trepresentation of CUBE, ROLLUP and GROUPING SETS clauses\n *\n * In a Query with grouping sets, the groupClause contains a flat list of\n * SortGroupClause nodes for each distinct expression used.  The actual\n * structure of the GROUP BY clause is given by the groupingSets tree.\n *\n * In the raw parser output, GroupingSet nodes (of all types except SIMPLE\n * which is not used) are potentially mixed in with the expressions in the\n * groupClause of the SelectStmt.  (An expression can't contain a GroupingSet,\n * but a list may mix GroupingSet and expression nodes.)  At this stage, the\n * content of each node is a list of expressions, some of which may be RowExprs\n * which represent sublists rather than actual row constructors, and nested\n * GroupingSet nodes where legal in the grammar.  The structure directly\n * reflects the query syntax.\n *\n * In parse analysis, the transformed expressions are used to build the tlist\n * and groupClause list (of SortGroupClause nodes), and the groupingSets tree\n * is eventually reduced to a fixed format:\n *\n * EMPTY nodes represent (), and obviously have no content\n *\n * SIMPLE nodes represent a list of one or more expressions to be treated as an\n * atom by the enclosing structure; the content is an integer list of\n * ressortgroupref values (see SortGroupClause)\n *\n * CUBE and ROLLUP nodes contain a list of one or more SIMPLE nodes.\n *\n * SETS nodes contain a list of EMPTY, SIMPLE, CUBE or ROLLUP nodes, but after\n * parse analysis they cannot contain more SETS nodes; enough of the syntactic\n * transforms of the spec have been applied that we no longer have arbitrarily\n * deep nesting (though we still preserve the use of cube/rollup).\n *\n * Note that if the groupingSets tree contains no SIMPLE nodes (only EMPTY\n * nodes at the leaves), then the groupClause will be empty, but this is still\n * an aggregation query (similar to using aggs or HAVING without GROUP BY).\n *\n * As an example, the following clause:\n *\n * GROUP BY GROUPING SETS ((a,b), CUBE(c,(d,e)))\n *\n * looks like this after raw parsing:\n *\n * SETS( RowExpr(a,b) , CUBE( c, RowExpr(d,e) ) )\n *\n * and parse analysis converts it to:\n *\n * SETS( SIMPLE(1,2), CUBE( SIMPLE(3), SIMPLE(4,5) ) )\n */\n"
    },
    SetOperation: {
      values: [
        {
          comment: ''
        },
        {
          name: 'SETOP_NONE',
          comment: null
        },
        {
          name: 'SETOP_UNION',
          comment: null
        },
        {
          name: 'SETOP_INTERSECT',
          comment: null
        },
        {
          name: 'SETOP_EXCEPT',
          comment: null
        }
      ],
      comment:
        '/* ----------------------\n *\t\tSelect Statement\n *\n * A "simple" SELECT is represented in the output of gram.y by a single\n * SelectStmt node; so is a VALUES construct.  A query containing set\n * operators (UNION, INTERSECT, EXCEPT) is represented by a tree of SelectStmt\n * nodes, in which the leaf nodes are component SELECTs and the internal nodes\n * represent UNION, INTERSECT, or EXCEPT operators.  Using the same node\n * type for both leaf and internal nodes allows gram.y to stick ORDER BY,\n * LIMIT, etc, clause values into a SELECT statement without worrying\n * whether it is a simple or compound SELECT.\n * ----------------------\n */\n'
    },
    ObjectType: {
      values: [
        {
          comment: ''
        },
        {
          name: 'OBJECT_ACCESS_METHOD',
          comment: null
        },
        {
          name: 'OBJECT_AGGREGATE',
          comment: null
        },
        {
          name: 'OBJECT_AMOP',
          comment: null
        },
        {
          name: 'OBJECT_AMPROC',
          comment: null
        },
        {
          name: 'OBJECT_ATTRIBUTE',
          comment: "/* type's attribute, when distinct from column */"
        },
        {
          name: 'OBJECT_CAST',
          comment: null
        },
        {
          name: 'OBJECT_COLUMN',
          comment: null
        },
        {
          name: 'OBJECT_COLLATION',
          comment: null
        },
        {
          name: 'OBJECT_CONVERSION',
          comment: null
        },
        {
          name: 'OBJECT_DATABASE',
          comment: null
        },
        {
          name: 'OBJECT_DEFAULT',
          comment: null
        },
        {
          name: 'OBJECT_DEFACL',
          comment: null
        },
        {
          name: 'OBJECT_DOMAIN',
          comment: null
        },
        {
          name: 'OBJECT_DOMCONSTRAINT',
          comment: null
        },
        {
          name: 'OBJECT_EVENT_TRIGGER',
          comment: null
        },
        {
          name: 'OBJECT_EXTENSION',
          comment: null
        },
        {
          name: 'OBJECT_FDW',
          comment: null
        },
        {
          name: 'OBJECT_FOREIGN_SERVER',
          comment: null
        },
        {
          name: 'OBJECT_FOREIGN_TABLE',
          comment: null
        },
        {
          name: 'OBJECT_FUNCTION',
          comment: null
        },
        {
          name: 'OBJECT_INDEX',
          comment: null
        },
        {
          name: 'OBJECT_LANGUAGE',
          comment: null
        },
        {
          name: 'OBJECT_LARGEOBJECT',
          comment: null
        },
        {
          name: 'OBJECT_MATVIEW',
          comment: null
        },
        {
          name: 'OBJECT_OPCLASS',
          comment: null
        },
        {
          name: 'OBJECT_OPERATOR',
          comment: null
        },
        {
          name: 'OBJECT_OPFAMILY',
          comment: null
        },
        {
          name: 'OBJECT_POLICY',
          comment: null
        },
        {
          name: 'OBJECT_PUBLICATION',
          comment: null
        },
        {
          name: 'OBJECT_PUBLICATION_REL',
          comment: null
        },
        {
          name: 'OBJECT_ROLE',
          comment: null
        },
        {
          name: 'OBJECT_RULE',
          comment: null
        },
        {
          name: 'OBJECT_SCHEMA',
          comment: null
        },
        {
          name: 'OBJECT_SEQUENCE',
          comment: null
        },
        {
          name: 'OBJECT_SUBSCRIPTION',
          comment: null
        },
        {
          name: 'OBJECT_STATISTIC_EXT',
          comment: null
        },
        {
          name: 'OBJECT_TABCONSTRAINT',
          comment: null
        },
        {
          name: 'OBJECT_TABLE',
          comment: null
        },
        {
          name: 'OBJECT_TABLESPACE',
          comment: null
        },
        {
          name: 'OBJECT_TRANSFORM',
          comment: null
        },
        {
          name: 'OBJECT_TRIGGER',
          comment: null
        },
        {
          name: 'OBJECT_TSCONFIGURATION',
          comment: null
        },
        {
          name: 'OBJECT_TSDICTIONARY',
          comment: null
        },
        {
          name: 'OBJECT_TSPARSER',
          comment: null
        },
        {
          name: 'OBJECT_TSTEMPLATE',
          comment: null
        },
        {
          name: 'OBJECT_TYPE',
          comment: null
        },
        {
          name: 'OBJECT_USER_MAPPING',
          comment: null
        },
        {
          name: 'OBJECT_VIEW',
          comment: null
        }
      ],
      comment:
        "/*\n * When a command can act on several kinds of objects with only one\n * parse structure required, use these constants to designate the\n * object type.  Note that commands typically don't support all the types.\n */\n"
    },
    DropBehavior: {
      values: [
        {
          comment: ''
        },
        {
          name: 'DROP_RESTRICT',
          comment: '/* drop fails if any dependent objects */'
        },
        {
          name: 'DROP_CASCADE',
          comment: '/* remove dependent objects too */'
        }
      ],
      comment: null
    },
    AlterTableType: {
      values: [
        {
          comment: ''
        },
        {
          name: 'AT_AddColumn',
          comment: '/* add column */'
        },
        {
          name: 'AT_AddColumnRecurse',
          comment: '/* internal to commands/tablecmds.c */'
        },
        {
          name: 'AT_AddColumnToView',
          comment: '/* implicitly via CREATE OR REPLACE VIEW */'
        },
        {
          name: 'AT_ColumnDefault',
          comment: '/* alter column default */'
        },
        {
          name: 'AT_DropNotNull',
          comment: '/* alter column drop not null */'
        },
        {
          name: 'AT_SetNotNull',
          comment: '/* alter column set not null */'
        },
        {
          name: 'AT_SetStatistics',
          comment: '/* alter column set statistics */'
        },
        {
          name: 'AT_SetOptions',
          comment: '/* alter column set ( options ) */'
        },
        {
          name: 'AT_ResetOptions',
          comment: '/* alter column reset ( options ) */'
        },
        {
          name: 'AT_SetStorage',
          comment: '/* alter column set storage */'
        },
        {
          name: 'AT_DropColumn',
          comment: '/* drop column */'
        },
        {
          name: 'AT_DropColumnRecurse',
          comment: '/* internal to commands/tablecmds.c */'
        },
        {
          name: 'AT_AddIndex',
          comment: '/* add index */'
        },
        {
          name: 'AT_ReAddIndex',
          comment: '/* internal to commands/tablecmds.c */'
        },
        {
          name: 'AT_AddConstraint',
          comment: '/* add constraint */'
        },
        {
          name: 'AT_AddConstraintRecurse',
          comment: '/* internal to commands/tablecmds.c */'
        },
        {
          name: 'AT_ReAddConstraint',
          comment: '/* internal to commands/tablecmds.c */'
        },
        {
          name: 'AT_AlterConstraint',
          comment: '/* alter constraint */'
        },
        {
          name: 'AT_ValidateConstraint',
          comment: '/* validate constraint */'
        },
        {
          name: 'AT_ValidateConstraintRecurse',
          comment: '/* internal to commands/tablecmds.c */'
        },
        {
          name: 'AT_ProcessedConstraint',
          comment:
            '/* pre-processed add constraint (local in\n\t\t\t\t\t\t\t\t * parser/parse_utilcmd.c) */\n'
        },
        {
          name: 'AT_AddIndexConstraint',
          comment: '/* add constraint using existing index */'
        },
        {
          name: 'AT_DropConstraint',
          comment: '/* drop constraint */'
        },
        {
          name: 'AT_DropConstraintRecurse',
          comment: '/* internal to commands/tablecmds.c */'
        },
        {
          name: 'AT_ReAddComment',
          comment: '/* internal to commands/tablecmds.c */'
        },
        {
          name: 'AT_AlterColumnType',
          comment: '/* alter column type */'
        },
        {
          name: 'AT_AlterColumnGenericOptions',
          comment: '/* alter column OPTIONS (...) */'
        },
        {
          name: 'AT_ChangeOwner',
          comment: '/* change owner */'
        },
        {
          name: 'AT_ClusterOn',
          comment: '/* CLUSTER ON */'
        },
        {
          name: 'AT_DropCluster',
          comment: '/* SET WITHOUT CLUSTER */'
        },
        {
          name: 'AT_SetLogged',
          comment: '/* SET LOGGED */'
        },
        {
          name: 'AT_SetUnLogged',
          comment: '/* SET UNLOGGED */'
        },
        {
          name: 'AT_AddOids',
          comment: '/* SET WITH OIDS */'
        },
        {
          name: 'AT_AddOidsRecurse',
          comment: '/* internal to commands/tablecmds.c */'
        },
        {
          name: 'AT_DropOids',
          comment: '/* SET WITHOUT OIDS */'
        },
        {
          name: 'AT_SetTableSpace',
          comment: '/* SET TABLESPACE */'
        },
        {
          name: 'AT_SetRelOptions',
          comment: '/* SET (...) -- AM specific parameters */'
        },
        {
          name: 'AT_ResetRelOptions',
          comment: '/* RESET (...) -- AM specific parameters */'
        },
        {
          name: 'AT_ReplaceRelOptions',
          comment: '/* replace reloption list in its entirety */'
        },
        {
          name: 'AT_EnableTrig',
          comment: '/* ENABLE TRIGGER name */'
        },
        {
          name: 'AT_EnableAlwaysTrig',
          comment: '/* ENABLE ALWAYS TRIGGER name */'
        },
        {
          name: 'AT_EnableReplicaTrig',
          comment: '/* ENABLE REPLICA TRIGGER name */'
        },
        {
          name: 'AT_DisableTrig',
          comment: '/* DISABLE TRIGGER name */'
        },
        {
          name: 'AT_EnableTrigAll',
          comment: '/* ENABLE TRIGGER ALL */'
        },
        {
          name: 'AT_DisableTrigAll',
          comment: '/* DISABLE TRIGGER ALL */'
        },
        {
          name: 'AT_EnableTrigUser',
          comment: '/* ENABLE TRIGGER USER */'
        },
        {
          name: 'AT_DisableTrigUser',
          comment: '/* DISABLE TRIGGER USER */'
        },
        {
          name: 'AT_EnableRule',
          comment: '/* ENABLE RULE name */'
        },
        {
          name: 'AT_EnableAlwaysRule',
          comment: '/* ENABLE ALWAYS RULE name */'
        },
        {
          name: 'AT_EnableReplicaRule',
          comment: '/* ENABLE REPLICA RULE name */'
        },
        {
          name: 'AT_DisableRule',
          comment: '/* DISABLE RULE name */'
        },
        {
          name: 'AT_AddInherit',
          comment: '/* INHERIT parent */'
        },
        {
          name: 'AT_DropInherit',
          comment: '/* NO INHERIT parent */'
        },
        {
          name: 'AT_AddOf',
          comment: '/* OF <type_name> */'
        },
        {
          name: 'AT_DropOf',
          comment: '/* NOT OF */'
        },
        {
          name: 'AT_ReplicaIdentity',
          comment: '/* REPLICA IDENTITY */'
        },
        {
          name: 'AT_EnableRowSecurity',
          comment: '/* ENABLE ROW SECURITY */'
        },
        {
          name: 'AT_DisableRowSecurity',
          comment: '/* DISABLE ROW SECURITY */'
        },
        {
          name: 'AT_ForceRowSecurity',
          comment: '/* FORCE ROW SECURITY */'
        },
        {
          name: 'AT_NoForceRowSecurity',
          comment: '/* NO FORCE ROW SECURITY */'
        },
        {
          name: 'AT_GenericOptions',
          comment: '/* OPTIONS (...) */'
        },
        {
          name: 'AT_AttachPartition',
          comment: '/* ATTACH PARTITION */'
        },
        {
          name: 'AT_DetachPartition',
          comment: '/* DETACH PARTITION */'
        },
        {
          name: 'AT_AddIdentity',
          comment: '/* ADD IDENTITY */'
        },
        {
          name: 'AT_SetIdentity',
          comment: '/* SET identity column options */'
        },
        {
          name: 'AT_DropIdentity',
          comment: '/* DROP IDENTITY */'
        }
      ],
      comment: null
    },
    GrantTargetType: {
      values: [
        {
          comment: ''
        },
        {
          name: 'ACL_TARGET_OBJECT',
          comment: '/* grant on specific named object(s) */'
        },
        {
          name: 'ACL_TARGET_ALL_IN_SCHEMA',
          comment: '/* grant on all objects in given schema(s) */'
        },
        {
          name: 'ACL_TARGET_DEFAULTS',
          comment: '/* ALTER DEFAULT PRIVILEGES */'
        }
      ],
      comment:
        '/* ----------------------\n *\t\tGrant|Revoke Statement\n * ----------------------\n */\n'
    },
    GrantObjectType: {
      values: [
        {
          comment: ''
        },
        {
          name: 'ACL_OBJECT_COLUMN',
          comment: '/* column */'
        },
        {
          name: 'ACL_OBJECT_RELATION',
          comment: '/* table, view */'
        },
        {
          name: 'ACL_OBJECT_SEQUENCE',
          comment: '/* sequence */'
        },
        {
          name: 'ACL_OBJECT_DATABASE',
          comment: '/* database */'
        },
        {
          name: 'ACL_OBJECT_DOMAIN',
          comment: '/* domain */'
        },
        {
          name: 'ACL_OBJECT_FDW',
          comment: '/* foreign-data wrapper */'
        },
        {
          name: 'ACL_OBJECT_FOREIGN_SERVER',
          comment: '/* foreign server */'
        },
        {
          name: 'ACL_OBJECT_FUNCTION',
          comment: '/* function */'
        },
        {
          name: 'ACL_OBJECT_LANGUAGE',
          comment: '/* procedural language */'
        },
        {
          name: 'ACL_OBJECT_LARGEOBJECT',
          comment: '/* largeobject */'
        },
        {
          name: 'ACL_OBJECT_NAMESPACE',
          comment: '/* namespace */'
        },
        {
          name: 'ACL_OBJECT_TABLESPACE',
          comment: '/* tablespace */'
        },
        {
          name: 'ACL_OBJECT_TYPE',
          comment: '/* type */'
        }
      ],
      comment: null
    },
    VariableSetKind: {
      values: [
        {
          comment: ''
        },
        {
          name: 'VAR_SET_VALUE',
          comment: '/* SET var = value */'
        },
        {
          name: 'VAR_SET_DEFAULT',
          comment: '/* SET var TO DEFAULT */'
        },
        {
          name: 'VAR_SET_CURRENT',
          comment: '/* SET var FROM CURRENT */'
        },
        {
          name: 'VAR_SET_MULTI',
          comment: '/* special case for SET TRANSACTION ... */'
        },
        {
          name: 'VAR_RESET',
          comment: '/* RESET var */'
        },
        {
          name: 'VAR_RESET_ALL',
          comment: '/* RESET ALL */'
        }
      ],
      comment:
        '/* ----------------------\n * SET Statement (includes RESET)\n *\n * "SET var TO DEFAULT" and "RESET var" are semantically equivalent, but we\n * preserve the distinction in VariableSetKind for CreateCommandTag().\n * ----------------------\n */\n'
    },
    ConstrType: {
      values: [
        {
          comment: ''
        },
        {
          name: 'CONSTR_NULL',
          comment:
            '/* not standard SQL, but a lot of people\n\t\t\t\t\t\t\t\t * expect it */\n'
        },
        {
          name: 'CONSTR_NOTNULL',
          comment: null
        },
        {
          name: 'CONSTR_DEFAULT',
          comment: null
        },
        {
          name: 'CONSTR_IDENTITY',
          comment: null
        },
        {
          name: 'CONSTR_CHECK',
          comment: null
        },
        {
          name: 'CONSTR_PRIMARY',
          comment: null
        },
        {
          name: 'CONSTR_UNIQUE',
          comment: null
        },
        {
          name: 'CONSTR_EXCLUSION',
          comment: null
        },
        {
          name: 'CONSTR_FOREIGN',
          comment: null
        },
        {
          name: 'CONSTR_ATTR_DEFERRABLE',
          comment: '/* attributes for previous constraint node */'
        },
        {
          name: 'CONSTR_ATTR_NOT_DEFERRABLE',
          comment: null
        },
        {
          name: 'CONSTR_ATTR_DEFERRED',
          comment: null
        },
        {
          name: 'CONSTR_ATTR_IMMEDIATE',
          comment: null
        },
        {
          name: 'CONSTR_GENERATED',
          comment: null
        }
      ],
      comment:
        '/* ----------\n * Definitions for constraints in CreateStmt\n *\n * Note that column defaults are treated as a type of constraint,\n * even though that\'s a bit odd semantically.\n *\n * For constraints that use expressions (CONSTR_CHECK, CONSTR_DEFAULT)\n * we may have the expression in either "raw" form (an untransformed\n * parse tree) or "cooked" form (the nodeToString representation of\n * an executable expression tree), depending on how this Constraint\n * node was created (by parsing, or by inheritance from an existing\n * relation).  We should never have both in the same node!\n *\n * FKCONSTR_ACTION_xxx values are stored into pg_constraint.confupdtype\n * and pg_constraint.confdeltype columns; FKCONSTR_MATCH_xxx values are\n * stored into pg_constraint.confmatchtype.  Changing the code values may\n * require an initdb!\n *\n * If skip_validation is true then we skip checking that the existing rows\n * in the table satisfy the constraint, and just install the catalog entries\n * for the constraint.  A new FK constraint is marked as valid iff\n * initially_valid is true.  (Usually skip_validation and initially_valid\n * are inverses, but we can set both true if the table is known empty.)\n *\n * Constraint attributes (DEFERRABLE etc) are initially represented as\n * separate Constraint nodes for simplicity of parsing.  parse_utilcmd.c makes\n * a pass through the constraints list to insert the info into the appropriate\n * Constraint node.\n * ----------\n */\n'
    },
    ImportForeignSchemaType: {
      values: [
        {
          comment: ''
        },
        {
          name: 'FDW_IMPORT_SCHEMA_ALL',
          comment: '/* all relations wanted */'
        },
        {
          name: 'FDW_IMPORT_SCHEMA_LIMIT_TO',
          comment: '/* include only listed tables in import */'
        },
        {
          name: 'FDW_IMPORT_SCHEMA_EXCEPT',
          comment: '/* exclude listed tables from import */'
        }
      ],
      comment:
        '/* ----------------------\n *\t\tImport Foreign Schema Statement\n * ----------------------\n */\n'
    },
    RoleStmtType: {
      values: [
        {
          comment: ''
        },
        {
          name: 'ROLESTMT_ROLE',
          comment: null
        },
        {
          name: 'ROLESTMT_USER',
          comment: null
        },
        {
          name: 'ROLESTMT_GROUP',
          comment: null
        }
      ],
      comment:
        "/* ----------------------\n *\tCreate/Alter/Drop Role Statements\n *\n * Note: these node types are also used for the backwards-compatible\n * Create/Alter/Drop User/Group statements.  In the ALTER and DROP cases\n * there's really no need to distinguish what the original spelling was,\n * but for CREATE we mark the type because the defaults vary.\n * ----------------------\n */\n"
    },
    FetchDirection: {
      values: [
        {
          comment: ''
        },
        {
          comment:
            '\t/* for these, howMany is how many rows to fetch; FETCH_ALL means ALL */\n'
        },
        {
          name: 'FETCH_FORWARD',
          comment: null
        },
        {
          name: 'FETCH_BACKWARD',
          comment: null
        },
        {
          comment:
            '\t/* for these, howMany indicates a position; only one row is fetched */\n'
        },
        {
          name: 'FETCH_ABSOLUTE',
          comment: null
        },
        {
          name: 'FETCH_RELATIVE',
          comment: null
        }
      ],
      comment:
        '/* ----------------------\n *\t\tFetch Statement (also Move)\n * ----------------------\n */\n'
    },
    FunctionParameterMode: {
      values: [
        {
          comment: ''
        },
        {
          comment:
            "\t/* the assigned enum values appear in pg_proc, don't change 'em! */\n"
        },
        {
          name: 'FUNC_PARAM_IN',
          comment: null
        },
        {
          name: 'FUNC_PARAM_OUT',
          comment: null
        },
        {
          name: 'FUNC_PARAM_INOUT',
          comment: null
        },
        {
          name: 'FUNC_PARAM_VARIADIC',
          comment: null
        },
        {
          name: 'FUNC_PARAM_TABLE',
          comment: null
        }
      ],
      comment: null
    },
    TransactionStmtKind: {
      values: [
        {
          comment: ''
        },
        {
          name: 'TRANS_STMT_BEGIN',
          comment: null
        },
        {
          name: 'TRANS_STMT_START',
          comment: '/* semantically identical to BEGIN */'
        },
        {
          name: 'TRANS_STMT_COMMIT',
          comment: null
        },
        {
          name: 'TRANS_STMT_ROLLBACK',
          comment: null
        },
        {
          name: 'TRANS_STMT_SAVEPOINT',
          comment: null
        },
        {
          name: 'TRANS_STMT_RELEASE',
          comment: null
        },
        {
          name: 'TRANS_STMT_ROLLBACK_TO',
          comment: null
        },
        {
          name: 'TRANS_STMT_PREPARE',
          comment: null
        },
        {
          name: 'TRANS_STMT_COMMIT_PREPARED',
          comment: null
        },
        {
          name: 'TRANS_STMT_ROLLBACK_PREPARED',
          comment: null
        }
      ],
      comment:
        '/* ----------------------\n *\t\t{Begin|Commit|Rollback} Transaction Statement\n * ----------------------\n */\n'
    },
    ViewCheckOption: {
      values: [
        {
          comment: ''
        },
        {
          name: 'NO_CHECK_OPTION',
          comment: null
        },
        {
          name: 'LOCAL_CHECK_OPTION',
          comment: null
        },
        {
          name: 'CASCADED_CHECK_OPTION',
          comment: null
        }
      ],
      comment:
        '/* ----------------------\n *\t\tCreate View Statement\n * ----------------------\n */\n'
    },
    VacuumOption: {
      values: [
        {
          comment: ''
        },
        {
          name: 'VACOPT_VACUUM',
          comment: null
        },
        {
          name: 'VACOPT_ANALYZE',
          comment: null
        },
        {
          name: 'VACOPT_VERBOSE',
          comment: null
        },
        {
          name: 'VACOPT_FREEZE',
          comment: null
        },
        {
          name: 'VACOPT_FULL',
          comment: null
        },
        {
          name: 'VACOPT_NOWAIT',
          comment: null
        },
        {
          name: 'VACOPT_SKIPTOAST',
          comment: null
        },
        {
          name: 'VACOPT_DISABLE_PAGE_SKIPPING',
          comment: null
        }
      ],
      comment:
        "/* ----------------------\n *\t\tVacuum and Analyze Statements\n *\n * Even though these are nominally two statements, it's convenient to use\n * just one node type for both.  Note that at least one of VACOPT_VACUUM\n * and VACOPT_ANALYZE must be set in options.\n * ----------------------\n */\n"
    },
    DiscardMode: {
      values: [
        {
          comment: ''
        },
        {
          name: 'DISCARD_ALL',
          comment: null
        },
        {
          name: 'DISCARD_PLANS',
          comment: null
        },
        {
          name: 'DISCARD_SEQUENCES',
          comment: null
        },
        {
          name: 'DISCARD_TEMP',
          comment: null
        }
      ],
      comment:
        '/* ----------------------\n * Discard Statement\n * ----------------------\n */\n'
    },
    ReindexObjectType: {
      values: [
        {
          comment: ''
        },
        {
          name: 'REINDEX_OBJECT_INDEX',
          comment: '/* index */'
        },
        {
          name: 'REINDEX_OBJECT_TABLE',
          comment: '/* table or materialized view */'
        },
        {
          name: 'REINDEX_OBJECT_SCHEMA',
          comment: '/* schema */'
        },
        {
          name: 'REINDEX_OBJECT_SYSTEM',
          comment: '/* system catalogs */'
        },
        {
          name: 'REINDEX_OBJECT_DATABASE',
          comment: '/* database */'
        }
      ],
      comment: '/* Reindex options */\n'
    },
    AlterTSConfigType: {
      values: [
        {
          comment: ''
        },
        {
          name: 'ALTER_TSCONFIG_ADD_MAPPING',
          comment: null
        },
        {
          name: 'ALTER_TSCONFIG_ALTER_MAPPING_FOR_TOKEN',
          comment: null
        },
        {
          name: 'ALTER_TSCONFIG_REPLACE_DICT',
          comment: null
        },
        {
          name: 'ALTER_TSCONFIG_REPLACE_DICT_FOR_TOKEN',
          comment: null
        },
        {
          name: 'ALTER_TSCONFIG_DROP_MAPPING',
          comment: null
        }
      ],
      comment:
        '/*\n * TS Configuration stmts: DefineStmt, RenameStmt and DropStmt are default\n */\n'
    },
    AlterSubscriptionType: {
      values: [
        {
          comment: ''
        },
        {
          name: 'ALTER_SUBSCRIPTION_OPTIONS',
          comment: null
        },
        {
          name: 'ALTER_SUBSCRIPTION_CONNECTION',
          comment: null
        },
        {
          name: 'ALTER_SUBSCRIPTION_PUBLICATION',
          comment: null
        },
        {
          name: 'ALTER_SUBSCRIPTION_REFRESH',
          comment: null
        },
        {
          name: 'ALTER_SUBSCRIPTION_ENABLED',
          comment: null
        }
      ],
      comment: null
    }
  },
  'nodes/primnodes': {
    OnCommitAction: {
      values: [
        {
          comment: ''
        },
        {
          name: 'ONCOMMIT_NOOP',
          comment: '/* No ON COMMIT clause (do nothing) */'
        },
        {
          name: 'ONCOMMIT_PRESERVE_ROWS',
          comment: '/* ON COMMIT PRESERVE ROWS (do nothing) */'
        },
        {
          name: 'ONCOMMIT_DELETE_ROWS',
          comment: '/* ON COMMIT DELETE ROWS */'
        },
        {
          name: 'ONCOMMIT_DROP',
          comment: '/* ON COMMIT DROP */'
        }
      ],
      comment: '/* What to do at commit time for temporary relations */\n'
    },
    ParamKind: {
      values: [
        {
          comment: ''
        },
        {
          name: 'PARAM_EXTERN',
          comment: null
        },
        {
          name: 'PARAM_EXEC',
          comment: null
        },
        {
          name: 'PARAM_SUBLINK',
          comment: null
        },
        {
          name: 'PARAM_MULTIEXPR',
          comment: null
        }
      ],
      comment:
        "/*\n * Param\n *\n *\t\tparamkind specifies the kind of parameter. The possible values\n *\t\tfor this field are:\n *\n *\t\tPARAM_EXTERN:  The parameter value is supplied from outside the plan.\n *\t\t\t\tSuch parameters are numbered from 1 to n.\n *\n *\t\tPARAM_EXEC:  The parameter is an internal executor parameter, used\n *\t\t\t\tfor passing values into and out of sub-queries or from\n *\t\t\t\tnestloop joins to their inner scans.\n *\t\t\t\tFor historical reasons, such parameters are numbered from 0.\n *\t\t\t\tThese numbers are independent of PARAM_EXTERN numbers.\n *\n *\t\tPARAM_SUBLINK:\tThe parameter represents an output column of a SubLink\n *\t\t\t\tnode's sub-select.  The column number is contained in the\n *\t\t\t\t`paramid' field.  (This type of Param is converted to\n *\t\t\t\tPARAM_EXEC during planning.)\n *\n *\t\tPARAM_MULTIEXPR:  Like PARAM_SUBLINK, the parameter represents an\n *\t\t\t\toutput column of a SubLink node's sub-select, but here, the\n *\t\t\t\tSubLink is always a MULTIEXPR SubLink.  The high-order 16 bits\n *\t\t\t\tof the `paramid' field contain the SubLink's subLinkId, and\n *\t\t\t\tthe low-order 16 bits contain the column number.  (This type\n *\t\t\t\tof Param is also converted to PARAM_EXEC during planning.)\n */\n"
    },
    CoercionContext: {
      values: [
        {
          comment: ''
        },
        {
          name: 'COERCION_IMPLICIT',
          comment: '/* coercion in context of expression */'
        },
        {
          name: 'COERCION_ASSIGNMENT',
          comment: '/* coercion in context of assignment */'
        },
        {
          name: 'COERCION_EXPLICIT',
          comment: '/* explicit cast operation */'
        }
      ],
      comment:
        '/*\n * CoercionContext - distinguishes the allowed set of type casts\n *\n * NB: ordering of the alternatives is significant; later (larger) values\n * allow more casts than earlier ones.\n */\n'
    },
    CoercionForm: {
      values: [
        {
          comment: ''
        },
        {
          name: 'COERCE_EXPLICIT_CALL',
          comment: '/* display as a function call */'
        },
        {
          name: 'COERCE_EXPLICIT_CAST',
          comment: '/* display as an explicit cast */'
        },
        {
          name: 'COERCE_IMPLICIT_CAST',
          comment: '/* implicit cast, so hide it */'
        }
      ],
      comment:
        "/*\n * CoercionForm - how to display a node that could have come from a cast\n *\n * NB: equal() ignores CoercionForm fields, therefore this *must* not carry\n * any semantically significant information.  We need that behavior so that\n * the planner will consider equivalent implicit and explicit casts to be\n * equivalent.  In cases where those actually behave differently, the coercion\n * function's arguments will be different.\n */\n"
    },
    BoolExprType: {
      values: [
        {
          comment: ''
        },
        {
          name: 'AND_EXPR',
          comment: null
        },
        {
          name: 'OR_EXPR'
        }
      ],
      comment:
        '/*\n * BoolExpr - expression node for the basic Boolean operators AND, OR, NOT\n *\n * Notice the arguments are given as a List.  For NOT, of course the list\n * must always have exactly one element.  For AND and OR, there can be two\n * or more arguments.\n */\n'
    },
    SubLinkType: {
      values: [
        {
          comment: ''
        },
        {
          name: 'EXISTS_SUBLINK',
          comment: null
        },
        {
          name: 'ALL_SUBLINK',
          comment: null
        },
        {
          name: 'ANY_SUBLINK',
          comment: null
        },
        {
          name: 'ROWCOMPARE_SUBLINK',
          comment: null
        },
        {
          name: 'EXPR_SUBLINK',
          comment: null
        },
        {
          name: 'MULTIEXPR_SUBLINK',
          comment: null
        },
        {
          name: 'ARRAY_SUBLINK',
          comment: null
        },
        {
          name: 'CTE_SUBLINK',
          comment: '/* for SubPlans only */'
        }
      ],
      comment:
        "/*\n * SubLink\n *\n * A SubLink represents a subselect appearing in an expression, and in some\n * cases also the combining operator(s) just above it.  The subLinkType\n * indicates the form of the expression represented:\n *\tEXISTS_SUBLINK\t\tEXISTS(SELECT ...)\n *\tALL_SUBLINK\t\t\t(lefthand) op ALL (SELECT ...)\n *\tANY_SUBLINK\t\t\t(lefthand) op ANY (SELECT ...)\n *\tROWCOMPARE_SUBLINK\t(lefthand) op (SELECT ...)\n *\tEXPR_SUBLINK\t\t(SELECT with single targetlist item ...)\n *\tMULTIEXPR_SUBLINK\t(SELECT with multiple targetlist items ...)\n *\tARRAY_SUBLINK\t\tARRAY(SELECT with single targetlist item ...)\n *\tCTE_SUBLINK\t\t\tWITH query (never actually part of an expression)\n * For ALL, ANY, and ROWCOMPARE, the lefthand is a list of expressions of the\n * same length as the subselect's targetlist.  ROWCOMPARE will *always* have\n * a list with more than one entry; if the subselect has just one target\n * then the parser will create an EXPR_SUBLINK instead (and any operator\n * above the subselect will be represented separately).\n * ROWCOMPARE, EXPR, and MULTIEXPR require the subselect to deliver at most\n * one row (if it returns no rows, the result is NULL).\n * ALL, ANY, and ROWCOMPARE require the combining operators to deliver boolean\n * results.  ALL and ANY combine the per-row results using AND and OR\n * semantics respectively.\n * ARRAY requires just one target column, and creates an array of the target\n * column's type using any number of rows resulting from the subselect.\n *\n * SubLink is classed as an Expr node, but it is not actually executable;\n * it must be replaced in the expression tree by a SubPlan node during\n * planning.\n *\n * NOTE: in the raw output of gram.y, testexpr contains just the raw form\n * of the lefthand expression (if any), and operName is the String name of\n * the combining operator.  Also, subselect is a raw parsetree.  During parse\n * analysis, the parser transforms testexpr into a complete boolean expression\n * that compares the lefthand value(s) to PARAM_SUBLINK nodes representing the\n * output columns of the subselect.  And subselect is transformed to a Query.\n * This is the representation seen in saved rules and in the rewriter.\n *\n * In EXISTS, EXPR, MULTIEXPR, and ARRAY SubLinks, testexpr and operName\n * are unused and are always null.\n *\n * subLinkId is currently used only for MULTIEXPR SubLinks, and is zero in\n * other SubLinks.  This number identifies different multiple-assignment\n * subqueries within an UPDATE statement's SET list.  It is unique only\n * within a particular targetlist.  The output column(s) of the MULTIEXPR\n * are referenced by PARAM_MULTIEXPR Params appearing elsewhere in the tlist.\n *\n * The CTE_SUBLINK case never occurs in actual SubLink nodes, but it is used\n * in SubPlans generated for WITH subqueries.\n */\n"
    },
    RowCompareType: {
      values: [
        {
          comment: ''
        },
        {
          comment:
            '\t/* Values of this enum are chosen to match btree strategy numbers */\n'
        },
        {
          name: 'ROWCOMPARE_LT',
          comment: null
        },
        {
          name: 'ROWCOMPARE_LE',
          comment: null
        },
        {
          name: 'ROWCOMPARE_EQ',
          comment: null
        },
        {
          name: 'ROWCOMPARE_GE',
          comment: null
        },
        {
          name: 'ROWCOMPARE_GT',
          comment: null
        },
        {
          name: 'ROWCOMPARE_NE',
          comment: null
        }
      ],
      comment:
        '/*\n * RowCompareExpr - row-wise comparison, such as (a, b) <= (1, 2)\n *\n * We support row comparison for any operator that can be determined to\n * act like =, <>, <, <=, >, or >= (we determine this by looking for the\n * operator in btree opfamilies).  Note that the same operator name might\n * map to a different operator for each pair of row elements, since the\n * element datatypes can vary.\n *\n * A RowCompareExpr node is only generated for the < <= > >= cases;\n * the = and <> cases are translated to simple AND or OR combinations\n * of the pairwise comparisons.  However, we include = and <> in the\n * RowCompareType enum for the convenience of parser logic.\n */\n'
    },
    MinMaxOp: {
      values: [
        {
          comment: ''
        },
        {
          name: 'IS_GREATEST',
          comment: null
        },
        {
          name: 'IS_LEAST',
          comment: null
        }
      ],
      comment: '/*\n * MinMaxExpr - a GREATEST or LEAST function\n */\n'
    },
    SQLValueFunctionOp: {
      values: [
        {
          comment: ''
        },
        {
          name: 'SVFOP_CURRENT_DATE',
          comment: null
        },
        {
          name: 'SVFOP_CURRENT_TIME',
          comment: null
        },
        {
          name: 'SVFOP_CURRENT_TIME_N',
          comment: null
        },
        {
          name: 'SVFOP_CURRENT_TIMESTAMP',
          comment: null
        },
        {
          name: 'SVFOP_CURRENT_TIMESTAMP_N',
          comment: null
        },
        {
          name: 'SVFOP_LOCALTIME',
          comment: null
        },
        {
          name: 'SVFOP_LOCALTIME_N',
          comment: null
        },
        {
          name: 'SVFOP_LOCALTIMESTAMP',
          comment: null
        },
        {
          name: 'SVFOP_LOCALTIMESTAMP_N',
          comment: null
        },
        {
          name: 'SVFOP_CURRENT_ROLE',
          comment: null
        },
        {
          name: 'SVFOP_CURRENT_USER',
          comment: null
        },
        {
          name: 'SVFOP_USER',
          comment: null
        },
        {
          name: 'SVFOP_SESSION_USER',
          comment: null
        },
        {
          name: 'SVFOP_CURRENT_CATALOG',
          comment: null
        },
        {
          name: 'SVFOP_CURRENT_SCHEMA',
          comment: null
        }
      ],
      comment:
        "/*\n * SQLValueFunction - parameterless functions with special grammar productions\n *\n * The SQL standard categorizes some of these as <datetime value function>\n * and others as <general value specification>.  We call 'em SQLValueFunctions\n * for lack of a better term.  We store type and typmod of the result so that\n * some code doesn't need to know each function individually, and because\n * we would need to store typmod anyway for some of the datetime functions.\n * Note that currently, all variants return non-collating datatypes, so we do\n * not need a collation field; also, all these functions are stable.\n */\n"
    },
    XmlExprOp: {
      values: [
        {
          comment: ''
        },
        {
          name: 'IS_XMLCONCAT',
          comment: '/* XMLCONCAT(args) */'
        },
        {
          name: 'IS_XMLELEMENT',
          comment: '/* XMLELEMENT(name, xml_attributes, args) */'
        },
        {
          name: 'IS_XMLFOREST',
          comment: '/* XMLFOREST(xml_attributes) */'
        },
        {
          name: 'IS_XMLPARSE',
          comment: '/* XMLPARSE(text, is_doc, preserve_ws) */'
        },
        {
          name: 'IS_XMLPI',
          comment: '/* XMLPI(name [, args]) */'
        },
        {
          name: 'IS_XMLROOT',
          comment: '/* XMLROOT(xml, version, standalone) */'
        },
        {
          name: 'IS_XMLSERIALIZE',
          comment: '/* XMLSERIALIZE(is_document, xmlval) */'
        },
        {
          name: 'IS_DOCUMENT',
          comment: '/* xmlval IS DOCUMENT */'
        }
      ],
      comment:
        "/*\n * XmlExpr - various SQL/XML functions requiring special grammar productions\n *\n * 'name' carries the \"NAME foo\" argument (already XML-escaped).\n * 'named_args' and 'arg_names' represent an xml_attribute list.\n * 'args' carries all other arguments.\n *\n * Note: result type/typmod/collation are not stored, but can be deduced\n * from the XmlExprOp.  The type/typmod fields are just used for display\n * purposes, and are NOT necessarily the true result type of the node.\n */\n"
    },
    XmlOptionType: {
      values: [
        {
          comment: ''
        },
        {
          name: 'XMLOPTION_DOCUMENT',
          comment: null
        },
        {
          name: 'XMLOPTION_CONTENT',
          comment: null
        }
      ],
      comment: null
    },
    NullTestType: {
      values: [
        {
          comment: ''
        },
        {
          name: 'IS_NULL',
          comment: null
        },
        {
          name: 'IS_NOT_NULL'
        }
      ],
      comment:
        '/* ----------------\n * NullTest\n *\n * NullTest represents the operation of testing a value for NULLness.\n * The appropriate test is performed and returned as a boolean Datum.\n *\n * When argisrow is false, this simply represents a test for the null value.\n *\n * When argisrow is true, the input expression must yield a rowtype, and\n * the node implements "row IS [NOT] NULL" per the SQL standard.  This\n * includes checking individual fields for NULLness when the row datum\n * itself isn\'t NULL.\n *\n * NOTE: the combination of a rowtype input and argisrow==false does NOT\n * correspond to the SQL notation "row IS [NOT] NULL"; instead, this case\n * represents the SQL notation "row IS [NOT] DISTINCT FROM NULL".\n * ----------------\n */\n'
    },
    BoolTestType: {
      values: [
        {
          comment: ''
        },
        {
          name: 'IS_TRUE',
          comment: null
        },
        {
          name: 'IS_NOT_TRUE'
        }
      ],
      comment:
        '/*\n * BooleanTest\n *\n * BooleanTest represents the operation of determining whether a boolean\n * is TRUE, FALSE, or UNKNOWN (ie, NULL).  All six meaningful combinations\n * are supported.  Note that a NULL input does *not* cause a NULL result.\n * The appropriate test is performed and returned as a boolean Datum.\n */\n'
    }
  },
  'nodes/lockoptions': {
    LockClauseStrength: {
      values: [
        {
          comment: ''
        },
        {
          name: 'LCS_NONE',
          comment: '/* no such clause - only used in PlanRowMark */'
        },
        {
          name: 'LCS_FORKEYSHARE',
          comment: '/* FOR KEY SHARE */'
        },
        {
          name: 'LCS_FORSHARE',
          comment: '/* FOR SHARE */'
        },
        {
          name: 'LCS_FORNOKEYUPDATE',
          comment: '/* FOR NO KEY UPDATE */'
        },
        {
          name: 'LCS_FORUPDATE',
          comment: '/* FOR UPDATE */'
        }
      ],
      comment:
        '/*\n * This enum represents the different strengths of FOR UPDATE/SHARE clauses.\n * The ordering here is important, because the highest numerical value takes\n * precedence when a RTE is specified multiple ways.  See applyLockingClause.\n */\n'
    },
    LockWaitPolicy: {
      values: [
        {
          comment: ''
        },
        {
          comment:
            '\t/* Wait for the lock to become available (default behavior) */\n'
        },
        {
          name: 'LockWaitBlock',
          comment: null
        },
        {
          comment: "\t/* Skip rows that can't be locked (SKIP LOCKED) */\n"
        },
        {
          name: 'LockWaitSkip',
          comment: null
        },
        {
          comment: '\t/* Raise an error if a row cannot be locked (NOWAIT) */\n'
        },
        {
          name: 'LockWaitError',
          comment: null
        }
      ],
      comment:
        '/*\n * This enum controls how to deal with rows being locked by FOR UPDATE/SHARE\n * clauses (i.e., it represents the NOWAIT and SKIP LOCKED options).\n * The ordering here is important, because the highest numerical value takes\n * precedence when a RTE is specified multiple ways.  See applyLockingClause.\n */\n'
    }
  },
  'nodes/nodes': {
    NodeTag: {
      values: [
        {
          comment: ''
        },
        {
          name: 'T_Invalid',
          comment: null
        },
        {
          comment: ''
        },
        {
          comment: '\t/*\n\t * TAGS FOR EXECUTOR NODES (execnodes.h)\n\t */\n'
        },
        {
          name: 'T_IndexInfo',
          comment: null
        },
        {
          name: 'T_ExprContext',
          comment: null
        },
        {
          name: 'T_ProjectionInfo',
          comment: null
        },
        {
          name: 'T_JunkFilter',
          comment: null
        },
        {
          name: 'T_ResultRelInfo',
          comment: null
        },
        {
          name: 'T_EState',
          comment: null
        },
        {
          name: 'T_TupleTableSlot',
          comment: null
        },
        {
          comment: ''
        },
        {
          comment: '\t/*\n\t * TAGS FOR PLAN NODES (plannodes.h)\n\t */\n'
        },
        {
          name: 'T_Plan',
          comment: null
        },
        {
          name: 'T_Result',
          comment: null
        },
        {
          name: 'T_ProjectSet',
          comment: null
        },
        {
          name: 'T_ModifyTable',
          comment: null
        },
        {
          name: 'T_Append',
          comment: null
        },
        {
          name: 'T_MergeAppend',
          comment: null
        },
        {
          name: 'T_RecursiveUnion',
          comment: null
        },
        {
          name: 'T_BitmapAnd',
          comment: null
        },
        {
          name: 'T_BitmapOr',
          comment: null
        },
        {
          name: 'T_Scan',
          comment: null
        },
        {
          name: 'T_SeqScan',
          comment: null
        },
        {
          name: 'T_SampleScan',
          comment: null
        },
        {
          name: 'T_IndexScan',
          comment: null
        },
        {
          name: 'T_IndexOnlyScan',
          comment: null
        },
        {
          name: 'T_BitmapIndexScan',
          comment: null
        },
        {
          name: 'T_BitmapHeapScan',
          comment: null
        },
        {
          name: 'T_TidScan',
          comment: null
        },
        {
          name: 'T_SubqueryScan',
          comment: null
        },
        {
          name: 'T_FunctionScan',
          comment: null
        },
        {
          name: 'T_ValuesScan',
          comment: null
        },
        {
          name: 'T_TableFuncScan',
          comment: null
        },
        {
          name: 'T_CteScan',
          comment: null
        },
        {
          name: 'T_NamedTuplestoreScan',
          comment: null
        },
        {
          name: 'T_WorkTableScan',
          comment: null
        },
        {
          name: 'T_ForeignScan',
          comment: null
        },
        {
          name: 'T_CustomScan',
          comment: null
        },
        {
          name: 'T_Join',
          comment: null
        },
        {
          name: 'T_NestLoop',
          comment: null
        },
        {
          name: 'T_MergeJoin',
          comment: null
        },
        {
          name: 'T_HashJoin',
          comment: null
        },
        {
          name: 'T_Material',
          comment: null
        },
        {
          name: 'T_Sort',
          comment: null
        },
        {
          name: 'T_Group',
          comment: null
        },
        {
          name: 'T_Agg',
          comment: null
        },
        {
          name: 'T_WindowAgg',
          comment: null
        },
        {
          name: 'T_Unique',
          comment: null
        },
        {
          name: 'T_Gather',
          comment: null
        },
        {
          name: 'T_GatherMerge',
          comment: null
        },
        {
          name: 'T_Hash',
          comment: null
        },
        {
          name: 'T_SetOp',
          comment: null
        },
        {
          name: 'T_LockRows',
          comment: null
        },
        {
          name: 'T_Limit',
          comment: null
        },
        {
          comment: "\t/* these aren't subclasses of Plan: */\n"
        },
        {
          name: 'T_NestLoopParam',
          comment: null
        },
        {
          name: 'T_PlanRowMark',
          comment: null
        },
        {
          name: 'T_PlanInvalItem',
          comment: null
        },
        {
          comment: ''
        },
        {
          comment:
            '\t/*\n\t * TAGS FOR PLAN STATE NODES (execnodes.h)\n\t *\n\t * These should correspond one-to-one with Plan node types.\n\t */\n'
        },
        {
          name: 'T_PlanState',
          comment: null
        },
        {
          name: 'T_ResultState',
          comment: null
        },
        {
          name: 'T_ProjectSetState',
          comment: null
        },
        {
          name: 'T_ModifyTableState',
          comment: null
        },
        {
          name: 'T_AppendState',
          comment: null
        },
        {
          name: 'T_MergeAppendState',
          comment: null
        },
        {
          name: 'T_RecursiveUnionState',
          comment: null
        },
        {
          name: 'T_BitmapAndState',
          comment: null
        },
        {
          name: 'T_BitmapOrState',
          comment: null
        },
        {
          name: 'T_ScanState',
          comment: null
        },
        {
          name: 'T_SeqScanState',
          comment: null
        },
        {
          name: 'T_SampleScanState',
          comment: null
        },
        {
          name: 'T_IndexScanState',
          comment: null
        },
        {
          name: 'T_IndexOnlyScanState',
          comment: null
        },
        {
          name: 'T_BitmapIndexScanState',
          comment: null
        },
        {
          name: 'T_BitmapHeapScanState',
          comment: null
        },
        {
          name: 'T_TidScanState',
          comment: null
        },
        {
          name: 'T_SubqueryScanState',
          comment: null
        },
        {
          name: 'T_FunctionScanState',
          comment: null
        },
        {
          name: 'T_TableFuncScanState',
          comment: null
        },
        {
          name: 'T_ValuesScanState',
          comment: null
        },
        {
          name: 'T_CteScanState',
          comment: null
        },
        {
          name: 'T_NamedTuplestoreScanState',
          comment: null
        },
        {
          name: 'T_WorkTableScanState',
          comment: null
        },
        {
          name: 'T_ForeignScanState',
          comment: null
        },
        {
          name: 'T_CustomScanState',
          comment: null
        },
        {
          name: 'T_JoinState',
          comment: null
        },
        {
          name: 'T_NestLoopState',
          comment: null
        },
        {
          name: 'T_MergeJoinState',
          comment: null
        },
        {
          name: 'T_HashJoinState',
          comment: null
        },
        {
          name: 'T_MaterialState',
          comment: null
        },
        {
          name: 'T_SortState',
          comment: null
        },
        {
          name: 'T_GroupState',
          comment: null
        },
        {
          name: 'T_AggState',
          comment: null
        },
        {
          name: 'T_WindowAggState',
          comment: null
        },
        {
          name: 'T_UniqueState',
          comment: null
        },
        {
          name: 'T_GatherState',
          comment: null
        },
        {
          name: 'T_GatherMergeState',
          comment: null
        },
        {
          name: 'T_HashState',
          comment: null
        },
        {
          name: 'T_SetOpState',
          comment: null
        },
        {
          name: 'T_LockRowsState',
          comment: null
        },
        {
          name: 'T_LimitState',
          comment: null
        },
        {
          comment: ''
        },
        {
          comment: '\t/*\n\t * TAGS FOR PRIMITIVE NODES (primnodes.h)\n\t */\n'
        },
        {
          name: 'T_Alias',
          comment: null
        },
        {
          name: 'T_RangeVar',
          comment: null
        },
        {
          name: 'T_TableFunc',
          comment: null
        },
        {
          name: 'T_Expr',
          comment: null
        },
        {
          name: 'T_Var',
          comment: null
        },
        {
          name: 'T_Const',
          comment: null
        },
        {
          name: 'T_Param',
          comment: null
        },
        {
          name: 'T_Aggref',
          comment: null
        },
        {
          name: 'T_GroupingFunc',
          comment: null
        },
        {
          name: 'T_WindowFunc',
          comment: null
        },
        {
          name: 'T_ArrayRef',
          comment: null
        },
        {
          name: 'T_FuncExpr',
          comment: null
        },
        {
          name: 'T_NamedArgExpr',
          comment: null
        },
        {
          name: 'T_OpExpr',
          comment: null
        },
        {
          name: 'T_DistinctExpr',
          comment: null
        },
        {
          name: 'T_NullIfExpr',
          comment: null
        },
        {
          name: 'T_ScalarArrayOpExpr',
          comment: null
        },
        {
          name: 'T_BoolExpr',
          comment: null
        },
        {
          name: 'T_SubLink',
          comment: null
        },
        {
          name: 'T_SubPlan',
          comment: null
        },
        {
          name: 'T_AlternativeSubPlan',
          comment: null
        },
        {
          name: 'T_FieldSelect',
          comment: null
        },
        {
          name: 'T_FieldStore',
          comment: null
        },
        {
          name: 'T_RelabelType',
          comment: null
        },
        {
          name: 'T_CoerceViaIO',
          comment: null
        },
        {
          name: 'T_ArrayCoerceExpr',
          comment: null
        },
        {
          name: 'T_ConvertRowtypeExpr',
          comment: null
        },
        {
          name: 'T_CollateExpr',
          comment: null
        },
        {
          name: 'T_CaseExpr',
          comment: null
        },
        {
          name: 'T_CaseWhen',
          comment: null
        },
        {
          name: 'T_CaseTestExpr',
          comment: null
        },
        {
          name: 'T_ArrayExpr',
          comment: null
        },
        {
          name: 'T_RowExpr',
          comment: null
        },
        {
          name: 'T_RowCompareExpr',
          comment: null
        },
        {
          name: 'T_CoalesceExpr',
          comment: null
        },
        {
          name: 'T_MinMaxExpr',
          comment: null
        },
        {
          name: 'T_SQLValueFunction',
          comment: null
        },
        {
          name: 'T_XmlExpr',
          comment: null
        },
        {
          name: 'T_NullTest',
          comment: null
        },
        {
          name: 'T_BooleanTest',
          comment: null
        },
        {
          name: 'T_CoerceToDomain',
          comment: null
        },
        {
          name: 'T_CoerceToDomainValue',
          comment: null
        },
        {
          name: 'T_SetToDefault',
          comment: null
        },
        {
          name: 'T_CurrentOfExpr',
          comment: null
        },
        {
          name: 'T_NextValueExpr',
          comment: null
        },
        {
          name: 'T_InferenceElem',
          comment: null
        },
        {
          name: 'T_TargetEntry',
          comment: null
        },
        {
          name: 'T_RangeTblRef',
          comment: null
        },
        {
          name: 'T_JoinExpr',
          comment: null
        },
        {
          name: 'T_FromExpr',
          comment: null
        },
        {
          name: 'T_OnConflictExpr',
          comment: null
        },
        {
          name: 'T_IntoClause',
          comment: null
        },
        {
          comment: ''
        },
        {
          comment:
            "\t/*\n\t * TAGS FOR EXPRESSION STATE NODES (execnodes.h)\n\t *\n\t * ExprState represents the evaluation state for a whole expression tree.\n\t * Most Expr-based plan nodes do not have a corresponding expression state\n\t * node, they're fully handled within execExpr* - but sometimes the state\n\t * needs to be shared with other parts of the executor, as for example\n\t * with AggrefExprState, which nodeAgg.c has to modify.\n\t */\n"
        },
        {
          name: 'T_ExprState',
          comment: null
        },
        {
          name: 'T_AggrefExprState',
          comment: null
        },
        {
          name: 'T_WindowFuncExprState',
          comment: null
        },
        {
          name: 'T_SetExprState',
          comment: null
        },
        {
          name: 'T_SubPlanState',
          comment: null
        },
        {
          name: 'T_AlternativeSubPlanState',
          comment: null
        },
        {
          name: 'T_DomainConstraintState',
          comment: null
        },
        {
          comment: ''
        },
        {
          comment: '\t/*\n\t * TAGS FOR PLANNER NODES (relation.h)\n\t */\n'
        },
        {
          name: 'T_PlannerInfo',
          comment: null
        },
        {
          name: 'T_PlannerGlobal',
          comment: null
        },
        {
          name: 'T_RelOptInfo',
          comment: null
        },
        {
          name: 'T_IndexOptInfo',
          comment: null
        },
        {
          name: 'T_ForeignKeyOptInfo',
          comment: null
        },
        {
          name: 'T_ParamPathInfo',
          comment: null
        },
        {
          name: 'T_Path',
          comment: null
        },
        {
          name: 'T_IndexPath',
          comment: null
        },
        {
          name: 'T_BitmapHeapPath',
          comment: null
        },
        {
          name: 'T_BitmapAndPath',
          comment: null
        },
        {
          name: 'T_BitmapOrPath',
          comment: null
        },
        {
          name: 'T_TidPath',
          comment: null
        },
        {
          name: 'T_SubqueryScanPath',
          comment: null
        },
        {
          name: 'T_ForeignPath',
          comment: null
        },
        {
          name: 'T_CustomPath',
          comment: null
        },
        {
          name: 'T_NestPath',
          comment: null
        },
        {
          name: 'T_MergePath',
          comment: null
        },
        {
          name: 'T_HashPath',
          comment: null
        },
        {
          name: 'T_AppendPath',
          comment: null
        },
        {
          name: 'T_MergeAppendPath',
          comment: null
        },
        {
          name: 'T_ResultPath',
          comment: null
        },
        {
          name: 'T_MaterialPath',
          comment: null
        },
        {
          name: 'T_UniquePath',
          comment: null
        },
        {
          name: 'T_GatherPath',
          comment: null
        },
        {
          name: 'T_GatherMergePath',
          comment: null
        },
        {
          name: 'T_ProjectionPath',
          comment: null
        },
        {
          name: 'T_ProjectSetPath',
          comment: null
        },
        {
          name: 'T_SortPath',
          comment: null
        },
        {
          name: 'T_GroupPath',
          comment: null
        },
        {
          name: 'T_UpperUniquePath',
          comment: null
        },
        {
          name: 'T_AggPath',
          comment: null
        },
        {
          name: 'T_GroupingSetsPath',
          comment: null
        },
        {
          name: 'T_MinMaxAggPath',
          comment: null
        },
        {
          name: 'T_WindowAggPath',
          comment: null
        },
        {
          name: 'T_SetOpPath',
          comment: null
        },
        {
          name: 'T_RecursiveUnionPath',
          comment: null
        },
        {
          name: 'T_LockRowsPath',
          comment: null
        },
        {
          name: 'T_ModifyTablePath',
          comment: null
        },
        {
          name: 'T_LimitPath',
          comment: null
        },
        {
          comment: "\t/* these aren't subclasses of Path: */\n"
        },
        {
          name: 'T_EquivalenceClass',
          comment: null
        },
        {
          name: 'T_EquivalenceMember',
          comment: null
        },
        {
          name: 'T_PathKey',
          comment: null
        },
        {
          name: 'T_PathTarget',
          comment: null
        },
        {
          name: 'T_RestrictInfo',
          comment: null
        },
        {
          name: 'T_PlaceHolderVar',
          comment: null
        },
        {
          name: 'T_SpecialJoinInfo',
          comment: null
        },
        {
          name: 'T_AppendRelInfo',
          comment: null
        },
        {
          name: 'T_PartitionedChildRelInfo',
          comment: null
        },
        {
          name: 'T_PlaceHolderInfo',
          comment: null
        },
        {
          name: 'T_MinMaxAggInfo',
          comment: null
        },
        {
          name: 'T_PlannerParamItem',
          comment: null
        },
        {
          name: 'T_RollupData',
          comment: null
        },
        {
          name: 'T_GroupingSetData',
          comment: null
        },
        {
          name: 'T_StatisticExtInfo',
          comment: null
        },
        {
          comment: ''
        },
        {
          comment: '\t/*\n\t * TAGS FOR MEMORY NODES (memnodes.h)\n\t */\n'
        },
        {
          name: 'T_MemoryContext',
          comment: null
        },
        {
          name: 'T_AllocSetContext',
          comment: null
        },
        {
          name: 'T_SlabContext',
          comment: null
        },
        {
          comment: ''
        },
        {
          comment: '\t/*\n\t * TAGS FOR VALUE NODES (value.h)\n\t */\n'
        },
        {
          name: 'T_Value',
          comment: null
        },
        {
          name: 'T_Integer',
          comment: null
        },
        {
          name: 'T_Float',
          comment: null
        },
        {
          name: 'T_String',
          comment: null
        },
        {
          name: 'T_BitString',
          comment: null
        },
        {
          name: 'T_Null',
          comment: null
        },
        {
          comment: ''
        },
        {
          comment: '\t/*\n\t * TAGS FOR LIST NODES (pg_list.h)\n\t */\n'
        },
        {
          name: 'T_List',
          comment: null
        },
        {
          name: 'T_IntList',
          comment: null
        },
        {
          name: 'T_OidList',
          comment: null
        },
        {
          comment: ''
        },
        {
          comment:
            '\t/*\n\t * TAGS FOR EXTENSIBLE NODES (extensible.h)\n\t */\n'
        },
        {
          name: 'T_ExtensibleNode',
          comment: null
        },
        {
          comment: ''
        },
        {
          comment:
            '\t/*\n\t * TAGS FOR STATEMENT NODES (mostly in parsenodes.h)\n\t */\n'
        },
        {
          name: 'T_RawStmt',
          comment: null
        },
        {
          name: 'T_Query',
          comment: null
        },
        {
          name: 'T_PlannedStmt',
          comment: null
        },
        {
          name: 'T_InsertStmt',
          comment: null
        },
        {
          name: 'T_DeleteStmt',
          comment: null
        },
        {
          name: 'T_UpdateStmt',
          comment: null
        },
        {
          name: 'T_SelectStmt',
          comment: null
        },
        {
          name: 'T_AlterTableStmt',
          comment: null
        },
        {
          name: 'T_AlterTableCmd',
          comment: null
        },
        {
          name: 'T_AlterDomainStmt',
          comment: null
        },
        {
          name: 'T_SetOperationStmt',
          comment: null
        },
        {
          name: 'T_GrantStmt',
          comment: null
        },
        {
          name: 'T_GrantRoleStmt',
          comment: null
        },
        {
          name: 'T_AlterDefaultPrivilegesStmt',
          comment: null
        },
        {
          name: 'T_ClosePortalStmt',
          comment: null
        },
        {
          name: 'T_ClusterStmt',
          comment: null
        },
        {
          name: 'T_CopyStmt',
          comment: null
        },
        {
          name: 'T_CreateStmt',
          comment: null
        },
        {
          name: 'T_DefineStmt',
          comment: null
        },
        {
          name: 'T_DropStmt',
          comment: null
        },
        {
          name: 'T_TruncateStmt',
          comment: null
        },
        {
          name: 'T_CommentStmt',
          comment: null
        },
        {
          name: 'T_FetchStmt',
          comment: null
        },
        {
          name: 'T_IndexStmt',
          comment: null
        },
        {
          name: 'T_CreateFunctionStmt',
          comment: null
        },
        {
          name: 'T_AlterFunctionStmt',
          comment: null
        },
        {
          name: 'T_DoStmt',
          comment: null
        },
        {
          name: 'T_RenameStmt',
          comment: null
        },
        {
          name: 'T_RuleStmt',
          comment: null
        },
        {
          name: 'T_NotifyStmt',
          comment: null
        },
        {
          name: 'T_ListenStmt',
          comment: null
        },
        {
          name: 'T_UnlistenStmt',
          comment: null
        },
        {
          name: 'T_TransactionStmt',
          comment: null
        },
        {
          name: 'T_ViewStmt',
          comment: null
        },
        {
          name: 'T_LoadStmt',
          comment: null
        },
        {
          name: 'T_CreateDomainStmt',
          comment: null
        },
        {
          name: 'T_CreatedbStmt',
          comment: null
        },
        {
          name: 'T_DropdbStmt',
          comment: null
        },
        {
          name: 'T_VacuumStmt',
          comment: null
        },
        {
          name: 'T_ExplainStmt',
          comment: null
        },
        {
          name: 'T_CreateTableAsStmt',
          comment: null
        },
        {
          name: 'T_CreateSeqStmt',
          comment: null
        },
        {
          name: 'T_AlterSeqStmt',
          comment: null
        },
        {
          name: 'T_VariableSetStmt',
          comment: null
        },
        {
          name: 'T_VariableShowStmt',
          comment: null
        },
        {
          name: 'T_DiscardStmt',
          comment: null
        },
        {
          name: 'T_CreateTrigStmt',
          comment: null
        },
        {
          name: 'T_CreatePLangStmt',
          comment: null
        },
        {
          name: 'T_CreateRoleStmt',
          comment: null
        },
        {
          name: 'T_AlterRoleStmt',
          comment: null
        },
        {
          name: 'T_DropRoleStmt',
          comment: null
        },
        {
          name: 'T_LockStmt',
          comment: null
        },
        {
          name: 'T_ConstraintsSetStmt',
          comment: null
        },
        {
          name: 'T_ReindexStmt',
          comment: null
        },
        {
          name: 'T_CheckPointStmt',
          comment: null
        },
        {
          name: 'T_CreateSchemaStmt',
          comment: null
        },
        {
          name: 'T_AlterDatabaseStmt',
          comment: null
        },
        {
          name: 'T_AlterDatabaseSetStmt',
          comment: null
        },
        {
          name: 'T_AlterRoleSetStmt',
          comment: null
        },
        {
          name: 'T_CreateConversionStmt',
          comment: null
        },
        {
          name: 'T_CreateCastStmt',
          comment: null
        },
        {
          name: 'T_CreateOpClassStmt',
          comment: null
        },
        {
          name: 'T_CreateOpFamilyStmt',
          comment: null
        },
        {
          name: 'T_AlterOpFamilyStmt',
          comment: null
        },
        {
          name: 'T_PrepareStmt',
          comment: null
        },
        {
          name: 'T_ExecuteStmt',
          comment: null
        },
        {
          name: 'T_DeallocateStmt',
          comment: null
        },
        {
          name: 'T_DeclareCursorStmt',
          comment: null
        },
        {
          name: 'T_CreateTableSpaceStmt',
          comment: null
        },
        {
          name: 'T_DropTableSpaceStmt',
          comment: null
        },
        {
          name: 'T_AlterObjectDependsStmt',
          comment: null
        },
        {
          name: 'T_AlterObjectSchemaStmt',
          comment: null
        },
        {
          name: 'T_AlterOwnerStmt',
          comment: null
        },
        {
          name: 'T_AlterOperatorStmt',
          comment: null
        },
        {
          name: 'T_DropOwnedStmt',
          comment: null
        },
        {
          name: 'T_ReassignOwnedStmt',
          comment: null
        },
        {
          name: 'T_CompositeTypeStmt',
          comment: null
        },
        {
          name: 'T_CreateEnumStmt',
          comment: null
        },
        {
          name: 'T_CreateRangeStmt',
          comment: null
        },
        {
          name: 'T_AlterEnumStmt',
          comment: null
        },
        {
          name: 'T_AlterTSDictionaryStmt',
          comment: null
        },
        {
          name: 'T_AlterTSConfigurationStmt',
          comment: null
        },
        {
          name: 'T_CreateFdwStmt',
          comment: null
        },
        {
          name: 'T_AlterFdwStmt',
          comment: null
        },
        {
          name: 'T_CreateForeignServerStmt',
          comment: null
        },
        {
          name: 'T_AlterForeignServerStmt',
          comment: null
        },
        {
          name: 'T_CreateUserMappingStmt',
          comment: null
        },
        {
          name: 'T_AlterUserMappingStmt',
          comment: null
        },
        {
          name: 'T_DropUserMappingStmt',
          comment: null
        },
        {
          name: 'T_AlterTableSpaceOptionsStmt',
          comment: null
        },
        {
          name: 'T_AlterTableMoveAllStmt',
          comment: null
        },
        {
          name: 'T_SecLabelStmt',
          comment: null
        },
        {
          name: 'T_CreateForeignTableStmt',
          comment: null
        },
        {
          name: 'T_ImportForeignSchemaStmt',
          comment: null
        },
        {
          name: 'T_CreateExtensionStmt',
          comment: null
        },
        {
          name: 'T_AlterExtensionStmt',
          comment: null
        },
        {
          name: 'T_AlterExtensionContentsStmt',
          comment: null
        },
        {
          name: 'T_CreateEventTrigStmt',
          comment: null
        },
        {
          name: 'T_AlterEventTrigStmt',
          comment: null
        },
        {
          name: 'T_RefreshMatViewStmt',
          comment: null
        },
        {
          name: 'T_ReplicaIdentityStmt',
          comment: null
        },
        {
          name: 'T_AlterSystemStmt',
          comment: null
        },
        {
          name: 'T_CreatePolicyStmt',
          comment: null
        },
        {
          name: 'T_AlterPolicyStmt',
          comment: null
        },
        {
          name: 'T_CreateTransformStmt',
          comment: null
        },
        {
          name: 'T_CreateAmStmt',
          comment: null
        },
        {
          name: 'T_CreatePublicationStmt',
          comment: null
        },
        {
          name: 'T_AlterPublicationStmt',
          comment: null
        },
        {
          name: 'T_CreateSubscriptionStmt',
          comment: null
        },
        {
          name: 'T_AlterSubscriptionStmt',
          comment: null
        },
        {
          name: 'T_DropSubscriptionStmt',
          comment: null
        },
        {
          name: 'T_CreateStatsStmt',
          comment: null
        },
        {
          name: 'T_AlterCollationStmt',
          comment: null
        },
        {
          comment: ''
        },
        {
          comment:
            '\t/*\n\t * TAGS FOR PARSE TREE NODES (parsenodes.h)\n\t */\n'
        },
        {
          name: 'T_A_Expr',
          comment: null
        },
        {
          name: 'T_ColumnRef',
          comment: null
        },
        {
          name: 'T_ParamRef',
          comment: null
        },
        {
          name: 'T_A_Const',
          comment: null
        },
        {
          name: 'T_FuncCall',
          comment: null
        },
        {
          name: 'T_A_Star',
          comment: null
        },
        {
          name: 'T_A_Indices',
          comment: null
        },
        {
          name: 'T_A_Indirection',
          comment: null
        },
        {
          name: 'T_A_ArrayExpr',
          comment: null
        },
        {
          name: 'T_ResTarget',
          comment: null
        },
        {
          name: 'T_MultiAssignRef',
          comment: null
        },
        {
          name: 'T_TypeCast',
          comment: null
        },
        {
          name: 'T_CollateClause',
          comment: null
        },
        {
          name: 'T_SortBy',
          comment: null
        },
        {
          name: 'T_WindowDef',
          comment: null
        },
        {
          name: 'T_RangeSubselect',
          comment: null
        },
        {
          name: 'T_RangeFunction',
          comment: null
        },
        {
          name: 'T_RangeTableSample',
          comment: null
        },
        {
          name: 'T_RangeTableFunc',
          comment: null
        },
        {
          name: 'T_RangeTableFuncCol',
          comment: null
        },
        {
          name: 'T_TypeName',
          comment: null
        },
        {
          name: 'T_ColumnDef',
          comment: null
        },
        {
          name: 'T_IndexElem',
          comment: null
        },
        {
          name: 'T_Constraint',
          comment: null
        },
        {
          name: 'T_DefElem',
          comment: null
        },
        {
          name: 'T_RangeTblEntry',
          comment: null
        },
        {
          name: 'T_RangeTblFunction',
          comment: null
        },
        {
          name: 'T_TableSampleClause',
          comment: null
        },
        {
          name: 'T_WithCheckOption',
          comment: null
        },
        {
          name: 'T_SortGroupClause',
          comment: null
        },
        {
          name: 'T_GroupingSet',
          comment: null
        },
        {
          name: 'T_WindowClause',
          comment: null
        },
        {
          name: 'T_ObjectWithArgs',
          comment: null
        },
        {
          name: 'T_AccessPriv',
          comment: null
        },
        {
          name: 'T_CreateOpClassItem',
          comment: null
        },
        {
          name: 'T_TableLikeClause',
          comment: null
        },
        {
          name: 'T_FunctionParameter',
          comment: null
        },
        {
          name: 'T_LockingClause',
          comment: null
        },
        {
          name: 'T_RowMarkClause',
          comment: null
        },
        {
          name: 'T_XmlSerialize',
          comment: null
        },
        {
          name: 'T_WithClause',
          comment: null
        },
        {
          name: 'T_InferClause',
          comment: null
        },
        {
          name: 'T_OnConflictClause',
          comment: null
        },
        {
          name: 'T_CommonTableExpr',
          comment: null
        },
        {
          name: 'T_RoleSpec',
          comment: null
        },
        {
          name: 'T_TriggerTransition',
          comment: null
        },
        {
          name: 'T_PartitionElem',
          comment: null
        },
        {
          name: 'T_PartitionSpec',
          comment: null
        },
        {
          name: 'T_PartitionBoundSpec',
          comment: null
        },
        {
          name: 'T_PartitionRangeDatum',
          comment: null
        },
        {
          name: 'T_PartitionCmd',
          comment: null
        },
        {
          comment: ''
        },
        {
          comment:
            '\t/*\n\t * TAGS FOR REPLICATION GRAMMAR PARSE NODES (replnodes.h)\n\t */\n'
        },
        {
          name: 'T_IdentifySystemCmd',
          comment: null
        },
        {
          name: 'T_BaseBackupCmd',
          comment: null
        },
        {
          name: 'T_CreateReplicationSlotCmd',
          comment: null
        },
        {
          name: 'T_DropReplicationSlotCmd',
          comment: null
        },
        {
          name: 'T_StartReplicationCmd',
          comment: null
        },
        {
          name: 'T_TimeLineHistoryCmd',
          comment: null
        },
        {
          name: 'T_SQLCmd',
          comment: null
        },
        {
          comment: ''
        },
        {
          comment:
            "\t/*\n\t * TAGS FOR RANDOM OTHER STUFF\n\t *\n\t * These are objects that aren't part of parse/plan/execute node tree\n\t * structures, but we give them NodeTags anyway for identification\n\t * purposes (usually because they are involved in APIs where we want to\n\t * pass multiple object types through the same pointer).\n\t */\n"
        },
        {
          name: 'T_TriggerData',
          comment: '/* in commands/trigger.h */'
        },
        {
          name: 'T_EventTriggerData',
          comment: '/* in commands/event_trigger.h */'
        },
        {
          name: 'T_ReturnSetInfo',
          comment: '/* in nodes/execnodes.h */'
        },
        {
          name: 'T_WindowObjectData',
          comment: '/* private in nodeWindowAgg.c */'
        },
        {
          name: 'T_TIDBitmap',
          comment: '/* in nodes/tidbitmap.h */'
        },
        {
          name: 'T_InlineCodeBlock',
          comment: '/* in nodes/parsenodes.h */'
        },
        {
          name: 'T_FdwRoutine',
          comment: '/* in foreign/fdwapi.h */'
        },
        {
          name: 'T_IndexAmRoutine',
          comment: '/* in access/amapi.h */'
        },
        {
          name: 'T_TsmRoutine',
          comment: '/* in access/tsmapi.h */'
        },
        {
          name: 'T_ForeignKeyCacheInfo',
          comment: '/* in utils/rel.h */'
        }
      ],
      comment:
        "/*\n * The first field of every node is NodeTag. Each node created (with makeNode)\n * will have one of the following tags as the value of its first field.\n *\n * Note that inserting or deleting node types changes the numbers of other\n * node types later in the list.  This is no problem during development, since\n * the node numbers are never stored on disk.  But don't do it in a released\n * branch, because that would represent an ABI break for extensions.\n */\n"
    },
    CmdType: {
      values: [
        {
          comment: ''
        },
        {
          name: 'CMD_UNKNOWN',
          comment: null
        },
        {
          name: 'CMD_SELECT',
          comment: '/* select stmt */'
        },
        {
          name: 'CMD_UPDATE',
          comment: '/* update stmt */'
        },
        {
          name: 'CMD_INSERT',
          comment: '/* insert stmt */'
        },
        {
          name: 'CMD_DELETE',
          comment: null
        },
        {
          name: 'CMD_UTILITY',
          comment:
            '/* cmds like create, destroy, copy, vacuum,\n\t\t\t\t\t\t\t\t * etc. */\n'
        },
        {
          name: 'CMD_NOTHING',
          comment:
            '/* dummy command for instead nothing rules\n\t\t\t\t\t\t\t\t * with qual */\n'
        }
      ],
      comment:
        '/*\n * CmdType -\n *\t  enums for type of operation represented by a Query or PlannedStmt\n *\n * This is needed in both parsenodes.h and plannodes.h, so put it here...\n */\n'
    },
    JoinType: {
      values: [
        {
          comment: ''
        },
        {
          comment:
            '\t/*\n\t * The canonical kinds of joins according to the SQL JOIN syntax. Only\n\t * these codes can appear in parser output (e.g., JoinExpr nodes).\n\t */\n'
        },
        {
          name: 'JOIN_INNER',
          comment: '/* matching tuple pairs only */'
        },
        {
          name: 'JOIN_LEFT',
          comment: '/* pairs + unmatched LHS tuples */'
        },
        {
          name: 'JOIN_FULL',
          comment: '/* pairs + unmatched LHS + unmatched RHS */'
        },
        {
          name: 'JOIN_RIGHT',
          comment: '/* pairs + unmatched RHS tuples */'
        },
        {
          comment: ''
        },
        {
          comment:
            '\t/*\n\t * Semijoins and anti-semijoins (as defined in relational theory) do not\n\t * appear in the SQL JOIN syntax, but there are standard idioms for\n\t * representing them (e.g., using EXISTS).  The planner recognizes these\n\t * cases and converts them to joins.  So the planner and executor must\n\t * support these codes.  NOTE: in JOIN_SEMI output, it is unspecified\n\t * which matching RHS row is joined to.  In JOIN_ANTI output, the row is\n\t * guaranteed to be null-extended.\n\t */\n'
        },
        {
          name: 'JOIN_SEMI',
          comment: '/* 1 copy of each LHS row that has match(es) */'
        },
        {
          name: 'JOIN_ANTI',
          comment: '/* 1 copy of each LHS row that has no match */'
        },
        {
          comment: ''
        },
        {
          comment:
            '\t/*\n\t * These codes are used internally in the planner, but are not supported\n\t * by the executor (nor, indeed, by most of the planner).\n\t */\n'
        },
        {
          name: 'JOIN_UNIQUE_OUTER',
          comment: '/* LHS path must be made unique */'
        },
        {
          name: 'JOIN_UNIQUE_INNER',
          comment: '/* RHS path must be made unique */'
        },
        {
          comment: ''
        },
        {
          comment:
            '\t/*\n\t * We might need additional join types someday.\n\t */\n'
        }
      ],
      comment:
        '/*\n * JoinType -\n *\t  enums for types of relation joins\n *\n * JoinType determines the exact semantics of joining two relations using\n * a matching qualification.  For example, it tells what to do with a tuple\n * that has no match in the other relation.\n *\n * This is needed in both parsenodes.h and plannodes.h, so put it here...\n */\n'
    },
    AggStrategy: {
      values: [
        {
          comment: ''
        },
        {
          name: 'AGG_PLAIN',
          comment: '/* simple agg across all input rows */'
        },
        {
          name: 'AGG_SORTED',
          comment: '/* grouped agg, input must be sorted */'
        },
        {
          name: 'AGG_HASHED',
          comment: '/* grouped agg, use internal hashtable */'
        },
        {
          name: 'AGG_MIXED',
          comment: '/* grouped agg, hash and sort both used */'
        }
      ],
      comment:
        '/*\n * AggStrategy -\n *\t  overall execution strategies for Agg plan nodes\n *\n * This is needed in both plannodes.h and relation.h, so put it here...\n */\n'
    },
    AggSplit: {
      values: [
        {
          comment: ''
        },
        {
          comment: '\t/* Basic, non-split aggregation: */\n'
        },
        {
          name: 'AGGSPLIT_SIMPLE',
          comment: null
        },
        {
          comment:
            '\t/* Initial phase of partial aggregation, with serialization: */\n'
        },
        {
          name: 'AGGSPLIT_INITIAL_SERIAL',
          comment: null
        },
        {
          comment:
            '\t/* Final phase of partial aggregation, with deserialization: */\n'
        },
        {
          name: 'AGGSPLIT_FINAL_DESERIAL',
          comment: null
        }
      ],
      comment:
        '/* Supported operating modes (i.e., useful combinations of these options): */\n'
    },
    SetOpCmd: {
      values: [
        {
          comment: ''
        },
        {
          name: 'SETOPCMD_INTERSECT',
          comment: null
        },
        {
          name: 'SETOPCMD_INTERSECT_ALL',
          comment: null
        },
        {
          name: 'SETOPCMD_EXCEPT',
          comment: null
        },
        {
          name: 'SETOPCMD_EXCEPT_ALL',
          comment: null
        }
      ],
      comment:
        '/*\n * SetOpCmd and SetOpStrategy -\n *\t  overall semantics and execution strategies for SetOp plan nodes\n *\n * This is needed in both plannodes.h and relation.h, so put it here...\n */\n'
    },
    SetOpStrategy: {
      values: [
        {
          comment: ''
        },
        {
          name: 'SETOP_SORTED',
          comment: '/* input must be sorted */'
        },
        {
          name: 'SETOP_HASHED',
          comment: '/* use internal hashtable */'
        }
      ],
      comment: null
    },
    OnConflictAction: {
      values: [
        {
          comment: ''
        },
        {
          name: 'ONCONFLICT_NONE',
          comment: '/* No "ON CONFLICT" clause */'
        },
        {
          name: 'ONCONFLICT_NOTHING',
          comment: '/* ON CONFLICT ... DO NOTHING */'
        },
        {
          name: 'ONCONFLICT_UPDATE',
          comment: '/* ON CONFLICT ... DO UPDATE */'
        }
      ],
      comment:
        '/*\n * OnConflictAction -\n *\t  "ON CONFLICT" clause type of query\n *\n * This is needed in both parsenodes.h and plannodes.h, so put it here...\n */\n'
    }
  },
  'nodes/params': {},
  'access/attnum': {},
  c: {},
  postgres: {
    vartag_external: {
      values: [
        {
          comment: ''
        },
        {
          name: 'VARTAG_INDIRECT',
          comment: null
        },
        {
          name: 'VARTAG_EXPANDED_RO',
          comment: null
        },
        {
          name: 'VARTAG_EXPANDED_RW',
          comment: null
        },
        {
          name: 'VARTAG_ONDISK',
          comment: null
        }
      ],
      comment:
        '/*\n * Type tag for the various sorts of "TOAST pointer" datums.  The peculiar\n * value for VARTAG_ONDISK comes from a requirement for on-disk compatibility\n * with a previous notion that the tag field was the pointer datum\'s length.\n */\n'
    }
  },
  postgres_ext: {},
  'storage/block': {},
  'access/sdir': {
    ScanDirection: {
      values: [
        {
          comment: ''
        },
        {
          name: 'BackwardScanDirection',
          comment: null
        },
        {
          name: 'NoMovementScanDirection',
          comment: null
        },
        {
          name: 'ForwardScanDirection',
          comment: null
        }
      ],
      comment:
        "/*\n * ScanDirection was an int8 for no apparent reason. I kept the original\n * values because I'm not sure if I'll break anything otherwise.  -ay 2/95\n */\n"
    }
  }
};
