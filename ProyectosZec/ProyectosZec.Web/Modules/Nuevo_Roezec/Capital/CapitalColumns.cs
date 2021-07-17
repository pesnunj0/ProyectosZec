﻿
namespace ProyectosZec.Nuevo_Roezec.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Nuevo_Roezec.Capital")]
    [BasedOnRow(typeof(Entities.CapitalRow), CheckNames = true)]
    public class CapitalColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CapitalId { get; set; }
        [EditLink]
        public String Capital { get; set; }
    }
}