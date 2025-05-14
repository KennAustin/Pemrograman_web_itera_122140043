from pyramid.config import Configurator
from pyramid.view import view_config
from pyramid.response import Response
from pyramid.httpexceptions import HTTPBadRequest, HTTPNotFound, HTTPCreated, HTTPNoContent
from ..models import Matakuliah
# Mengindikasikan scan view di dalam file ini
def includeme(config):
    # Menambahkan views atau handler spesifik untuk matakuliah
    config.add_view(get_matakuliah, route_name='get_matakuliah', renderer='json')
    config.add_view(create_matakuliah, route_name='create_matakuliah', renderer='json')
    config.add_view(update_matakuliah, route_name='update_matakuliah', renderer='json')
    config.add_view(delete_matakuliah, route_name='delete_matakuliah', renderer='json')

@view_config(route_name='get_matakuliah', renderer='json')
def get_matakuliah(request):
    matakuliah = request.dbsession.query(Matakuliah).all()
    return [{
        'id': mk.id,
        'kode_mk': mk.kode_mk,
        'nama_mk': mk.nama_mk,
        'sks': mk.sks,
        'semester': mk.semester
    } for mk in matakuliah]


@view_config(route_name='create_matakuliah', renderer='json')
def create_matakuliah(request):
    data = request.json_body
    if not all(key in data for key in ['kode_mk', 'nama_mk', 'sks', 'semester']):
        return HTTPBadRequest(json_body={"error": "Missing required fields"})
    
    mk = Matakuliah(
        kode_mk=data['kode_mk'],
        nama_mk=data['nama_mk'],
        sks=data['sks'],
        semester=data['semester']
    )
    request.dbsession.add(mk)
    return HTTPCreated(location=f'/matakuliah/{mk.id}')


@view_config(route_name='update_matakuliah', renderer='json')
def update_matakuliah(request):
    mk = request.dbsession.get(Matakuliah, int(request.matchdict['id']))
    if not mk:
        return HTTPNotFound()
    data = request.json_body
    mk.kode_mk = data.get('kode_mk', mk.kode_mk)
    mk.nama_mk = data.get('nama_mk', mk.nama_mk)
    mk.sks = data.get('sks', mk.sks)
    mk.semester = data.get('semester', mk.semester)
    return {'message': 'updated'}


@view_config(route_name='delete_matakuliah', renderer='json')
def delete_matakuliah(request):
    mk = request.dbsession.get(Matakuliah, int(request.matchdict['id']))
    if not mk:
        return HTTPNotFound()
    request.dbsession.delete(mk)
    return HTTPNoContent()