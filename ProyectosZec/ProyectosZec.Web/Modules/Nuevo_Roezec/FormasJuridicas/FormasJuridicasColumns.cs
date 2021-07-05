
namespace ProyectosZec.Nuevo_Roezec.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Nuevo_Roezec.FormasJuridicas")]
    [BasedOnRow(typeof(Entities.FormasJuridicasRow), CheckNames = true)]
    public class FormasJuridicasColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 JuridicaId { get; set; }
        [EditLink]
        public String Juridica { get; set; }
    }
}