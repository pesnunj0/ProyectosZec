
namespace ProyectosZec.Nuevo_Roezec.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Nuevo_Roezec.EstadosEmpresa")]
    [BasedOnRow(typeof(Entities.EstadosEmpresaRow), CheckNames = true)]
    public class EstadosEmpresaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EstadoEmpresaId { get; set; }
        [EditLink]
        public String Estado { get; set; }
    }
}