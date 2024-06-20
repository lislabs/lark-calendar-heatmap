import React, { useCallback, useEffect, useImperativeHandle, useMemo, useState } from "react"
import { DashboardState, FieldType, base, bitable, dashboard } from '@lark-base-open/js-sdk'
import { Button, Input, Select, Toast } from "@douyinfe/semi-ui"
import '@/components/Config/style.css'
import { t } from "i18next"

let isInited = false

function ConfigLabel({label}: any) {
  return (
    <div className="label">
      {t(label)}
    </div>
  )
}

function FieldSelect({ fieldList, label, fieldId, setFieldId, fieldType, placeholder, mutuallyExclusiveId}: any) {
  return (
    <div>
      <ConfigLabel label={(label)} />
      <Select placeholder={(placeholder)} className="select" optionList={
        fieldList.filter((v: any, i: any) => {
          return v.fieldType == fieldType && v.fieldId != mutuallyExclusiveId
        }).map((v: any, i: any) => {
          return {
            "label": v.fieldName,
            "value": v.fieldId
          }
        })
      } onChange={(e) => {
        setFieldId(e)
      }} value={fieldId}></Select>
    </div>
  )
}
