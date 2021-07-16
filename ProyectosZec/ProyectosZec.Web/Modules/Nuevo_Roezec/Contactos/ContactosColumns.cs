
namespace ProyectosZec.Nuevo_Roezec.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Nuevo_Roezec.Contactos")]
    [BasedOnRow(typeof(Entities.ContactosRow), CheckNames = true)]
    public class ContactosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ContactoId { get; set; }
        [EditLink,Width(200)]
        public String Fullname { get; set; }
        [Width(100)]
        public String Nif { get; set; }
        [DisplayName("Telefono"),Width(100)]
        public String TelefonoFijo { get; set; }
        [Width(100)]
        public String Movil { get; set; }
        [QuickFilter,Width(110)]
        public String Idioma { get; set; }
        [Width(200)]
        public String Email { get; set; }
    }
}